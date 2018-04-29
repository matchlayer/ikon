const path = require('path');
const promisify = require('pify');
const webfontsGenerator = require('webfonts-generator');
const fse = require('fs-extra');
const rc = require('rc');

module.exports = (files, opts) => {
  const verbose = opts.verbose;
  const log = verbose
    ? (...msg) => console.warn(...msg) // eslint-disable-line no-console
    : () => {};

  const outputDest = path.join(process.cwd(), 'build');

  const generator = promisify(webfontsGenerator);

  const options = rc('ikon', {
    files,
    dest: outputDest,
    fontName: 'iconfont-regular',
    cssDest: path.join(outputDest, 'iconfont.css'),
    cssTemplate: path.join(__dirname, 'template.css'),
    cssFontsUrl: '/build',
    templateOptions: {
      classPrefix: 'i--',
      baseSelector: '.i'
    }
  });

  const error = err => {
    if (err) {
      log('Error on Generating Webfont!');
    } else {
      log('Webfont Generated!');
    }
  };

  const build = () => {
    log('Generating Webfont...');

    return generator(options, error);
  };

  return fse.mkdirp(options.dest)
    .then(build)
    .then(() => ({
      font: options.dest,
      css: options.cssDest,
    }));
};

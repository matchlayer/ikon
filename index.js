const build = require('./lib/build');

function InputException(message) {
  this.message = message;
  this.name = 'InputException';
}

module.exports = argv => {
  if (!argv.input || argv.input.length === 0) {
    throw new InputException('You must supply a file to build');
  }

  if (!argv.input[0].match(/\.svg/)) {
    throw new InputException('We are only able to handle .svg files');
  }

  return build(argv.input, argv.flags);
};

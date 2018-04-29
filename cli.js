#!/usr/bin/env node
'use strict';

const meow = require('meow');
const build = require('./');

const cli = meow(`
  Usage
    $ ikon [files]

  Options
    -V, --verbose  Output more verbose info to stderr.

  Files
    Files. This is required. The input files are .svg files that
    will be built into a webfont file.

  Example
    $ ikon *.svg
`, {
  flags: {
    verbose: {
      type: 'boolean',
      alias: 'V'
    }
  }
});

build(cli)
  .catch(error => {
    console.error(`Unable to build: ${error}`); // eslint-disable-line no-console, max-len

    process.exit(1);
  })
  .then(() => {
    process.exit(0);
  });

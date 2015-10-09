#!/usr/bin/env node

var program = require('commander'),
    version = require('../src/version');

program
  .version(version)
  .command('railroad [inputFilePath] [outputFilePath.svg]', 'Generate an SVG railroad diagram')
  .parse(process.argv);

// Look at src/debugger.js for the implementation
require("../src/diagrams");

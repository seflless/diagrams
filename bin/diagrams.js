#!/usr/bin/env node

var program = require('commander'),
    version = require('../src/version');

program
  .version(version)
  .command('railroad [inputFilePath] [outputFilePath.svg]', 'Generate a railroad diagram in svg')
  .command('dot [inputFilePath] [outputFilePath.svg]', 'Generate a dot in svg')
  .command('sequence [inputFilePath] [outputFilePath.svg]', 'Generate a network sequence diagram in svg')
  .parse(process.argv);

// Look at src/debugger.js for the implementation
require("../src/diagrams");

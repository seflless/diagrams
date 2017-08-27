#!/usr/bin/env node

var program = require('commander'),
    version = require('../src/version');

program
  .version(version)
  .command('flowchart [inputFilePath] [outputFilePath.svg]', 'Generate a flowchart in svg')
  .command('sequence [inputFilePath] [outputFilePath.svg]', 'Generate a network sequence diagram in svg')
  .command('dot [inputFilePath] [outputFilePath.svg]', 'Generate a dot in svg')
  .command('railroad [inputFilePath] [outputFilePath.svg]', 'Generate a railroad diagram in svg')
  .command('build [directory]', 'Scans a directory for diagram files and generates their matching .svg')
  .command('watch [directory]', 'Watch a directory for diagram files and automatically generate/update their matching .svg')
  .parse(process.argv);

// Look at src/debugger.js for the implementation
require("../src/diagrams");

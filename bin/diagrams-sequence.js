#!/usr/bin/env node

var program = require('commander'),
    inputFilePath,
    outputSVGFilePath,
    sequence = require('../src/sequence/sequence'),
    fs = require('fs');
program
    .parse(process.argv);

// There must be at least an input file
if(process.argv.length<3){
    console.log('Error: No input file provided')
    process.exit(1);
}

inputFilePath = process.argv[2];

if(process.argv[3]){
    outputSVGFilePath = process.argv[3];
} else {
    outputSVGFilePath = inputFilePath + ".svg";
}

sequence(inputFilePath, outputSVGFilePath, function(err){
    if(err){
        console.error(err);
        process.exit(1);
    }
});

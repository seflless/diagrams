#!/usr/bin/env node

var program = require('commander'),
    inputFilePath,
    outputSVGFilePath,
    flowchart = require('../src/flowchart/flowchart'),
    fs = require('fs');

program
    .parse(process.argv);

// There must be at least an input file
if(process.argv.length<3){
    console.log('No input file provided')
    process.exit(1);
}

inputFilePath = process.argv[2];

if(process.argv[3]){
    outputSVGFilePath = process.argv[3];
} else {
    outputSVGFilePath = inputFilePath + ".svg";
}

var inputContent = fs.readFileSync(inputFilePath, 'utf8');
try {
    flowchart(inputContent, function(err, outputContent){
        if(err){
            console.error(err);
            return;
        }
        console.log(outputContent);
        fs.writeFileSync(outputSVGFilePath, outputContent);
    });

} catch(error){
    console.log(error);
    process.exit(1);
}

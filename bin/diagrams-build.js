#!/usr/bin/env node

var program = require('commander'),
    build = require('../src/build')
    fs = require('fs');

    program
    .parse(process.argv);

// There should not be more than one directory provided
if( process.argv.length>=4 ){
    reportError('Only one directory argument expected');
}

// Validate the directory if it was provided, otherwise default to current directory
var directory = ".";
if( process.argv.length === 3 ) {
    directory = process.argv[2];

    try {
        var dirInfo = fs.readdirSync(directory);
    } catch( err ) {
        if(err.code === "ENOENT"){
            reportError("Provided directory does not exist");
        }
        if(err.code === "ENOTDIR"){
            reportError("Provided directory is a file");
        }
    }
}

build(false, directory, (err) => {
    if(err){
        console.log("Error: " + explanation );
        process.exit(1);
    }
});
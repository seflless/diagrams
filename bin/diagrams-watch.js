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
var watchDirectory = ".";
if( process.argv.length === 3 ) {
	watchDirectory = process.argv[2];

	try {
		var dirInfo = fs.readdirSync(watchDirectory);
	} catch( err ) {
		if(err.code === "ENOENT"){
			reportError("Provided directory does not exist");
		}
		if(err.code === "ENOTDIR"){
			reportError("Provided directory is a file");
		}
	}
}


var path = require('path');
var chokidar = require('chokidar');

build(true, watchDirectory, ()=>{});
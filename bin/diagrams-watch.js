#!/usr/bin/env node

var program = require('commander'),
    fs = require('fs');
program
	.option('b --build', 'build')
    .parse(process.argv);

// There should not be more than one directory provided
var buildPlusManyParameters = process.argv.length>=5 && typeof program.build !== 'undefined';
var noBuildTooManyParameters = !buildPlusManyParameters && process.argv.length>=5;
if( buildPlusManyParameters || noBuildTooManyParameters){
    reportError('Only one directory argument expected');
}

// Validate the directory if it was provided, otherwise default to current directory
var watchDirectory = ".";
if( (program.build && process.argv.length === 5) ||
	process.argv.length === 4 ) {
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

// Chokidar didn't seem to respect a glob pattern properly, so I have implemented
// the filtering on a watch of the entire directory. I filed an issue/question here:
// https://github.com/paulmillr/chokidar/issues/544
chokidar.watch(watchDirectory, {ignoreInitial:!program.build}).on('all', (event, inputPath) => {
	if( inputPath.match(/^.*\.(dot|sequence|flowchart|railroad)$/) !== null ){
		if( event==='add' || event==='change' ) {
			convertFile(inputPath);
		}
	}
});

function convertFile(inputPath) {
	var extension = inputPath.match(/^.*\.(dot|sequence|flowchart|railroad)$/)[1];
    var outputPath = inputPath+'.svg';

    console.log(inputPath + ' -> ' + outputPath);

	// Create dynamic path to matching generator for extension. Example for 'sequence' it ends
	// up as: var generator = require('../src/sequence/sequence')
	var generator = require('../src/'+extension+'/'+extension);
	generator(inputPath, outputPath, function(err){
		if(err){
			reportError(err);
		}
	})
}

function reportError(explanation){
	console.log("Error: " + explanation);
	process.exit(1);
}

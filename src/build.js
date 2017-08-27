var path = require('path');

function build(watch, directory, cb){

    if(watch){
        var chokidar = require('chokidar');
        // Chokidar didn't seem to respect a glob pattern properly, so I have implemented
        // the filtering on a watch of the entire directory. I filed an issue/question here:
        // https://github.com/paulmillr/chokidar/issues/544
        chokidar.watch(directory, {ignoreInitial:false}).on('all', (event, inputPath) => {
            if( inputPath.match(/^.*\.(dot|sequence|flowchart|railroad)$/) !== null ){
                if( event==='add' || event==='change' ) {
                    convertFile(inputPath);
                }
            }
        });
    } else {
        var glob = require('glob');
        let buildPattern = `${directory}/**/*.@(dot|sequence|flowchart|railroad)`;
        glob(buildPattern, {}, function (err, files) {
            if(err){
                return cb(err);
            }
            files.forEach( (file)=>{
                convertFile(file);
            });
            cb(null);
        })
    }
}

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


module.exports = build;
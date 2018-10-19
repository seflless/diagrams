var electron = require('electron'),
    proc = require('child_process'),
    path = require('path');

function sequence(inputPath, outputPath, cb) {
    // Launch electron using our main.js
    var child = proc.spawn(electron, [
            path.resolve(__dirname, 'electron-main.js'),
            inputPath,
            outputPath
        ]);

    child.stdout.on('data', function (data) {
        console.log('sequence:stdout: ' + data.toString());
    });

    child.stdout.on('data', function (data) {
        console.log('sequence:stderr: ' + data.toString());
    });

    child.on('close', function (code) {
        //console.log('child process exited with code ' + code);
        cb(code);
    });

};

module.exports = sequence;
/*
sequence('tests/fixtures/sequence/simple.sequence', 'sequence.svg', function(err){
    if(err){
        console.error(err);
        return;
    }
});
*/

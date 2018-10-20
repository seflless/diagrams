var electron = require('electron'),
    proc = require('child_process'),
    path = require('path');

function flowchart(inputPath, outputPath, cb) {
    // Launch electron using our main.js
    var child = proc.spawn(electron, [
            path.resolve(__dirname, 'electron-main.js'),
            inputPath,
            outputPath
        ]);

    child.stdout.on('data', function (data) {
      console.log('flowchart:stdout: ' + data.toString());
    });

    child.stderr.on('data', function (data) {
      console.log('flowchart:stderr: ' + data.toString());
    });

    child.on('close', function (code) {
        //console.log('child process exited with code ' + code);
        cb(code);
    });

};

module.exports = flowchart;
/*
flowchart('tests/fixtures/flowchart/simple.flowchart', 'docs/flowchart.svg', function(err){
    if(err){
        console.error(err);
        return;
    }
});
*/

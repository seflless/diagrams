var electron = require('electron-prebuilt'),
    proc = require('child_process'),
    path = require('path');

function flowchart(inputPath, outputPath, optionsPath, cb) {
    // Launch electron using our main.js
    var child = proc.spawn(electron, [
            path.resolve(__dirname, 'electron-main.js'),
            inputPath,
            outputPath,
            optionsPath
        ]);

    child.stdout.on('data', function (data) {
      //console.log('stdout: ' + data);
    });

    child.on('close', function (code) {
        //console.log('child process exited with code ' + code);
        cb();
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

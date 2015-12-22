var path = require('path')
var childProcess = require('child_process')
var phantomjs = require('phantomjs')
var binPath = phantomjs.path

var childArgs = [
  path.join(__dirname, 'flowchart.js')
]

childProcess.execFile(binPath, childArgs, function(err, stdout, stderr) {
  // handle results
  if(err){
      console.error(err);
  }
  console.log(stdout);
  console.log(stderr);
})

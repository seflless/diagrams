// Count all of the links from the io.js build page
var jsdom = require("jsdom");
    path = require('path')
    fs = require("fs"),
    raphael = fs.readFileSync(path.resolve(__dirname, "vendors/raphael.js"), "utf-8"),
    flowchart = fs.readFileSync(path.resolve(__dirname, "vendors/flowchartjs.js"), "utf-8"),
    generateFlowchartSVG = fs.readFileSync(path.resolve(__dirname, "generate-flowchart.js"), "utf-8"),
    // Read in content of our simulated webpage
    html = fs.readFileSync(path.resolve(__dirname, "index.html"), "utf-8");
/*
module.exports = function flowchart(inputContent, cb){
    var htmlWithInjectedFlowchartText = html.replace('FLOWCHART', inputContent);
    //console.log(inputContent);
    console.log(htmlWithInjectedFlowchartText);
    console.log('before');*/
    jsdom.env({
      html: html,
      src: [raphael, flowchart, generateFlowchartSVG],
      done: function (err, window) {
          if(err){
              cb(err);
              return;
          }

        console.log(window.document.getElementById('canvas').innerHTML);
      }
    });
    console.log('after');
//}

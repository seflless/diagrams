var Viz = require('viz.js');
var fs = require('fs');

module.exports = function dot(inputPath, outputPath, cb) {
    try{
        var inputContent = fs.readFileSync(inputPath, 'utf8');
        var outputContent = Viz(inputContent, { format: "svg", engine: "dot" });
        fs.writeFileSync(outputPath, outputContent);
    } catch(err){
        process.nextTick(function(){
            cb(err)
        });
    }
}

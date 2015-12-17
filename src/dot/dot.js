var Viz = require('viz.js');

module.exports = function railroad(inputContent){
    var result = Viz(inputContent, { format: "svg", engine: "dot" });
    return result;
}

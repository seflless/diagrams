/**
 * Get the current version of the command line tool
 */
var path = require('path'),
    packageInfo = require(path.resolve(__dirname, "../package.json"));

module.exports = packageInfo.version;

let fs = require('fs-extra');
let path = require('path');

let tmpDir;
module.exports = {
    init(cb){
        tmpDir = path.resolve(__dirname, '../tests/tmp');
        fs.emptyDir(tmpDir, (err) => {
            cb(err);
        });
    },

    getTmpDir(){
        return tmpDir;
    }
}
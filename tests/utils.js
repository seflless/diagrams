let fs = require('fs-extra');

let tmpDir;
module.exports = {
    init(cb){
        tmpDir = 'tests/tmp';
        fs.emptyDir(tmpDir, cb);
    },
    
    getTmpDir(){
        return tmpDir;
    }
}
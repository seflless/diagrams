let fs = require('fs-extra');
let path = require('path');
let os = require('os');

let tmpDir;
module.exports = {
    init(cb){
        tmpDir = path.resolve(os.tmpdir(), 'diagrams-test/');
        fs.ensureDirSync(tmpDir);
        setTimeout(cb, 0);
    },

    getTmpDir(){
        return tmpDir;
    }
}

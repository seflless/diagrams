let assert = require('assert');
let exec = require('child_process').exec;
let fs = require('fs-extra');
let utils = require('./utils');
let path = require('path');

describe('diagrams railroad', function(){
    it('should create .svg from .railroad files', function(cb) {
        let generatedSVGPath = `${utils.getTmpDir()}/railroad.svg`;
        let shouldBe = fs.readFileSync(path.resolve(__dirname, "fixtures/railroad/simple.railroad.svg")).toString();
        exec(`./bin/diagrams.js railroad tests/fixtures/railroad/simple.railroad ${generatedSVGPath}`, (err) => {
            if(err){
                return cb(err);
            }

            fs.readFile(generatedSVGPath, (err, fileContent) => {
                if(err){
                    return cb(err);
                }

                assert.equal(
                    fileContent.toString(),
                    shouldBe
                );
                cb(null);
            });
        })
    });
});

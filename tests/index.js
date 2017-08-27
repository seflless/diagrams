let utils = require('./utils');


before( (cb) => {
    utils.init(cb);
})

require('./sequence');
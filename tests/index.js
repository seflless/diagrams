let utils = require('./utils');


before( (cb) => {
    utils.init(cb);
})

require('./dot');
require('./flowchart');
require('./railroad');
require('./sequence');

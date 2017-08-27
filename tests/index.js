let utils = require('./utils');


before( () => {
    utils.init(() => {
        require('./sequence');
    });
})


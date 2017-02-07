const utils = require('./utils');


function dashboard(req, res, next) {
    utils.wrapHAL(req, res, {
        content: 'Hello World',
        _links: {
            other: {
                href: utils.generatePath(req, '/content')
            }
        }
    });
}



module.exports = {
    dashboard
};

const _ = require('lodash');


function pathPrefix(req) {
    return req.originalUrl;
}

function generatePath(req, path) {
    // Logic to get the path.
    return fullURL(req, req.baseUrl + path);
}

function fullURL(req, path) {
    return req.protocol + '://' + req.get('host') + path;
}

function wrapHAL(req, res, data) {
    res.status(200)
        .header('Content-Type', 'application/hal+json')
        .json({
            content: data.content,
            _links: _.extend({}, data._links, {
                self: {
                    href: fullURL(req, req.originalUrl)
                }
            })
        });
}


module.exports = {
    generatePath,
    wrapHAL
};

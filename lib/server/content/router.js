const router = require('express').Router();

const utils = require('./../utils');


router.route('/')
    .get((req, res) => {
        utils.wrapHAL(req, res, {
            content: 'In content section',
            _links: {
                home: {
                    href: utils.generatePath(req, '/')
                }
            }
        });
    });


module.exports = router;

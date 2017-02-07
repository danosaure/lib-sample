const router = require('express').Router();

const content = require('./content');
const controllers = require('./controllers');


router.route('/')
    .get(controllers.dashboard)

router.use('/content', content.router);


module.exports = router;

let router = require('express').Router()
let controller = require('../controllers/homeController')


router.get('/', controller.home);
router.get('/back', controller.back);


module.exports = router 
let router = require('express').Router()
let controller = require('../controllers/homeController')


router.get('/', controller.inicio);


module.exports = router 
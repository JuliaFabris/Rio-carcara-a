let router = require('express').Router()
let controller = require('../controllers/homeController')

/* Get - pagina de inicio */
router.get('/', controller.inicio);


module.exports = router 
let router = require('express').Router()
const backController = require('../controllers/backController');



router.get('/back', backController.index);



module.exports = router 


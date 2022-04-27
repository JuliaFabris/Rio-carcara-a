let express = require('express');
let router = express.Router();
let backController = require('../controllers/backController');

router.get("/back", backController.index);

module.exports = router
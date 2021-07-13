const express = require('express');
const router = express.Router();

const homeController = require('./controllers/homeController');
const addController = require('./controllers/addController');

router.get('/', homeController.index);
router.post('/AddItem', addController.add);

module.exports = router;
const express = require('express');
const router = express.Router();
const multer = require('multer');

const uploadConfig = require('./config/upload');
const homeController = require('./controllers/homeController');
const addController = require('./controllers/addController');

const upload = multer(uploadConfig);

router.get('/', homeController.index);
router.post('/AddItem', upload.single('image'),addController.add);

module.exports = router;
const express = require('express');
const router = express.Router();
const { getExternalData } = require('../controllers/externalDataController');

router.get('/data', getExternalData);

module.exports = router;
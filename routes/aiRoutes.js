const express = require('express');
const router = express.Router();
const { getExternalData } = require('../controllers/aiController');

router.get('/external-data', getExternalData);

module.exports = router;
const express = require('express');
const router = express.Router();
const { getApiData } = require('../controllers/apiController');

router.get('/data/:endpoint', getApiData);

module.exports = router;
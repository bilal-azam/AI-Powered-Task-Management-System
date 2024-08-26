const express = require('express');
const router = express.Router();
const { fetchData } = require('../controllers/externalController');

router.get('/external-data', fetchData);

module.exports = router;
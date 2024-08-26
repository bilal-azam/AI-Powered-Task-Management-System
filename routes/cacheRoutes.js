const express = require('express');
const router = express.Router();
const { fetchData } = require('../controllers/cacheController');

router.get('/data/:key', fetchData);

module.exports = router;
const express = require('express');
const router = express.Router();
const { searchItems } = require('../controllers/searchController');

router.get('/search', searchItems);

module.exports = router;
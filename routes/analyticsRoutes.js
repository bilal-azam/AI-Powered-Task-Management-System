const express = require('express');
const router = express.Router();
const { getAnalyticsData } = require('../controllers/analyticsController');

router.get('/analytics', getAnalyticsData);

module.exports = router;
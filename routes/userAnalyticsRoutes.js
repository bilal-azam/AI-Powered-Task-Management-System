const express = require('express');
const { getUserAnalytics } = require('../controllers/userAnalyticsController');
const router = express.Router();

router.get('/data', getUserAnalytics);

module.exports = router;
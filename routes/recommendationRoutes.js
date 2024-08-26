const express = require('express');
const router = express.Router();
const { getRecommendations } = require('../controllers/recommendationController');

router.get('/recommendations/:userId', getRecommendations);

module.exports = router;
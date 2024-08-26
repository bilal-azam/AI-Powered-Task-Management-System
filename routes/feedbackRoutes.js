const express = require('express');
const router = express.Router();
const { submitFeedback, getFeedback } = require('../controllers/feedbackController');

router.post('/submit', submitFeedback);
router.get('/all', getFeedback);

module.exports = router;
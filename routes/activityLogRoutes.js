const express = require('express');
const router = express.Router();
const { getActivityLogs } = require('../controllers/activityLogController');

router.get('/:userId', getActivityLogs);

module.exports = router;
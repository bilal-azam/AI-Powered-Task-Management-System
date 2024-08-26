const express = require('express');
const { getNotifications } = require('../controllers/notificationsController');
const router = express.Router();

router.get('/', getNotifications);

module.exports = router;
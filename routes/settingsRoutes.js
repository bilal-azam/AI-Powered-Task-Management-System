const express = require('express');
const router = express.Router();
const { updateSettings, getSettings } = require('../controllers/settingsController');

router.put('/update', updateSettings);
router.get('/get', getSettings);

module.exports = router;
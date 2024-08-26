const express = require('express');
const router = express.Router();
const { getProfile, updateProfile } = require('../controllers/profileController');

router.get('/profile', getProfile);
router.put('/profile', updateProfile);

module.exports = router;
const express = require('express');
const router = express.Router();
const { upload, uploadProfilePicture, getProfilePicture } = require('../controllers/profileController');

// Upload profile picture
router.post('/upload', upload.single('profilePicture'), uploadProfilePicture);

// Get profile picture
router.get('/picture', getProfilePicture);

module.exports = router;
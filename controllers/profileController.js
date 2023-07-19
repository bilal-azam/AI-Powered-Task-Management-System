const multer = require('multer');
const path = require('path');
const User = require('../models/User');

// Configure multer storage for profile pictures
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'uploads/profilePictures/');
    },
    filename: (req, file, cb) => {
        cb(null, req.user.id + path.extname(file.originalname));
    }
});

const upload = multer({ storage: storage });

const uploadProfilePicture = (req, res) => {
    res.json({ file: req.file });
};

const getProfilePicture = async (req, res) => {
    const user = await User.findById(req.user.id);
    if (!user) return res.status(404).json({ message: 'User not found' });
    res.json({ profilePicture: user.profilePicture });
};

module.exports = { upload, uploadProfilePicture, getProfilePicture };
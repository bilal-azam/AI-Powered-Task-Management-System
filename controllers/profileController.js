const User = require('../models/User');

const getProfile = async (req, res) => {
    const user = await User.findById(req.user._id);
    res.json(user);
};

const updateProfile = async (req, res) => {
    const { username, email } = req.body;
    const user = await User.findById(req.user._id);
    user.username = username;
    user.email = email;
    await user.save();
    res.json(user);
};

module.exports = { getProfile, updateProfile };
const User = require('../models/User');

const updateSettings = async (req, res) => {
    try {
        const { userId, settings } = req.body;
        const user = await User.findById(userId);
        if (!user) return res.status(404).json({ message: 'User not found' });
        user.settings = settings;
        await user.save();
        res.json({ message: 'Settings updated' });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

const getSettings = async (req, res) => {
    try {
        const user = await User.findById(req.user.id);
        if (!user) return res.status(404).json({ message: 'User not found' });
        res.json(user.settings);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

module.exports = { updateSettings, getSettings };
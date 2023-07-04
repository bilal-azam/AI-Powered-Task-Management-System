const User = require('../models/User');

const updateProfile = async (req, res) => {
    const { userId } = req.params;
    const updates = req.body;
    try {
        const user = await User.findById(userId);
        if (!user) return res.status(404).json({ message: 'User not found' });

        Object.assign(user, updates);
        await user.save();
        res.json(user);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

module.exports = { updateProfile };
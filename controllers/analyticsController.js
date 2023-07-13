const Task = require('../models/Task');
const User = require('../models/User');

const getAnalytics = async (req, res) => {
    try {
        const taskCount = await Task.countDocuments();
        const userCount = await User.countDocuments();

        res.json({ taskCount, userCount });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

module.exports = { getAnalytics };
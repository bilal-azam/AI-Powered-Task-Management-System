const ActivityLog = require('../models/ActivityLog');

const logActivity = async (userId, action) => {
    try {
        const log = new ActivityLog({ userId, action });
        await log.save();
    } catch (error) {
        console.error('Error logging activity:', error.message);
    }
};

const getActivityLogs = async (req, res) => {
    const { userId } = req.params;
    try {
        const logs = await ActivityLog.find({ userId });
        res.json(logs);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

module.exports = { logActivity, getActivityLogs };
const { sendNotification } = require('../services/notificationService');

const notifyUser = async (req, res) => {
    const { userId, subject, message } = req.body;
    try {
        await sendNotification(userId, subject, message);
        res.json({ message: 'Notification sent' });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

module.exports = { registerUser, loginUser, assignRole, notifyUser };
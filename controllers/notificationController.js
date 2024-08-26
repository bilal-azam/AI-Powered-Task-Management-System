const { sendNotification } = require('../services/notificationService');

const notifyUser = (req, res) => {
    const { email, subject, message } = req.body;
    sendNotification(email, subject, message);
    res.status(200).json({ message: 'Notification sent' });
};

module.exports = { notifyUser };
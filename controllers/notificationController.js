const Notification = require('../models/Notification');

const sendNotification = async (req, res) => {
    try {
        const { userId, message } = req.body;
        const notification = new Notification({ userId, message });
        await notification.save();
        res.status(201).send('Notification sent');
    } catch (error) {
        res.status(500).send('Error sending notification');
    }
};

module.exports = { sendNotification };
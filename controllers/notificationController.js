const { sendEmail } = require('../services/emailService');

const notifyAdmin = async () => {
    await sendEmail('admin@example.com', 'System Event', 'A significant event has occurred in the system.');
};

module.exports = { notifyAdmin };
const User = require('../models/User');
const nodemailer = require('nodemailer');

const sendNotification = async (userId, subject, message) => {
    try {
        const user = await User.findById(userId);
        if (!user) throw new Error('User not found');

        const transporter = nodemailer.createTransport({
            service: 'Gmail',
            auth: {
                user: process.env.EMAIL_USER,
                pass: process.env.EMAIL_PASS
            }
        });

        await transporter.sendMail({
            from: process.env.EMAIL_USER,
            to: user.email,
            subject: subject,
            text: message
        });
    } catch (error) {
        console.error('Error sending notification:', error.message);
    }
};

module.exports = { sendNotification };
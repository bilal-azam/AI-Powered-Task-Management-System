const { sendEmail } = require('../services/emailService');

const notifyUser = (req, res) => {
    const { email, subject, message } = req.body;
    sendEmail(email, subject, message);
    res.status(200).send('Email sent');
};

module.exports = { notifyUser };
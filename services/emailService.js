const nodemailer = require('nodemailer');

const sendEmail = async (to, subject, text) => {
    const transporter = nodemailer.createTransport({
        service: 'Gmail',
        auth: {
            user: 'your-email@gmail.com',
            pass: 'your-email-password'
        }
    });

    const mailOptions = {
        from: 'no-reply@example.com',
        to,
        subject,
        text
    };

    await transporter.sendMail(mailOptions);
};

module.exports = { sendEmail };
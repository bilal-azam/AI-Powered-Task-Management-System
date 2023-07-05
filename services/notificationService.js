const nodemailer = require('nodemailer');
const Task = require('../models/Task');

const sendDueDateNotifications = async () => {
    const tasks = await Task.find({ dueDate: { $lt: new Date() } });
    const transporter = nodemailer.createTransport({
        service: 'Gmail',
        auth: {
            user: process.env.EMAIL_USER,
            pass: process.env.EMAIL_PASS
        }
    });

    tasks.forEach(task => {
        transporter.sendMail({
            from: process.env.EMAIL_USER,
            to: task.assignedToEmail,
            subject: 'Task Due Date Notification',
            text: `Your task "${task.title}" is overdue!`
        });
    });
};

module.exports = { sendDueDateNotifications };
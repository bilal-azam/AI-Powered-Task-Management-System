const Feedback = require('../models/Feedback');

const submitFeedback = async (req, res) => {
    try {
        const { userId, message } = req.body;
        const feedback = new Feedback({ userId, message });
        await feedback.save();
        res.status(201).send('Feedback submitted');
    } catch (error) {
        res.status(500).send('Error submitting feedback');
    }
};

module.exports = { submitFeedback };
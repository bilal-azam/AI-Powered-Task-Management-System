const Feedback = require('../models/Feedback');

const submitFeedback = async (req, res) => {
    try {
        const feedback = new Feedback(req.body);
        await feedback.save();
        res.status(201).json(feedback);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

const getFeedback = async (req, res) => {
    try {
        const feedback = await Feedback.find().populate('userId');
        res.json(feedback);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

module.exports = { submitFeedback, getFeedback };
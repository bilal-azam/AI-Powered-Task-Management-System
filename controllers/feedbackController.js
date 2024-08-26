const submitFeedback = async (req, res) => {
    // Save feedback to the database
    console.log('Feedback received:', req.body.feedback);
    res.status(200).send('Feedback received');
};

module.exports = { submitFeedback };
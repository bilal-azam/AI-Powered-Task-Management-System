const saveFeedback = async (req, res) => {
    const { feedback } = req.body;
    // Save feedback to database logic here
    res.status(200).send('Feedback received');
};

module.exports = { saveFeedback };
const { recommendTasks } = require('../services/recommendationService');

const getRecommendations = (req, res) => {
    const userPreferences = req.body.preferences;
    const recommendations = recommendTasks(userPreferences);
    res.json(recommendations);
};

module.exports = { getRecommendations };
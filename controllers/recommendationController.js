const { recommend } = require('../services/recommendationService');

const getRecommendations = (req, res) => {
    const { userId } = req.params;
    const recommendations = recommend(userId);
    res.json(recommendations);
};

module.exports = { getRecommendations };
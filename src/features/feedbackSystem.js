// Integrate Sentiment Analysis with Feedback System
const { analyzeSentiment } = require('./sentimentAnalysis');

function collectFeedback(userId, feedback) {
    const sentiment = analyzeSentiment(feedback);
    // Save feedback and sentiment
    return { feedback, sentiment };
}

module.exports = { collectFeedback };
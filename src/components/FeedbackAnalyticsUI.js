// Refactor Feedback Sentiment Analytics UI for Clarity
function FeedbackAnalyticsUI({ analytics }) {
    return (
        <div className="feedback-analytics-ui">
            <h2>Feedback Sentiment Analysis</h2>
            <div>
                <p>Positive: {analytics.positive}%</p>
                <p>Neutral: {analytics.neutral}%</p>
                <p>Negative: {analytics.negative}%</p>
            </div>
        </div>
    );
}

module.exports = { FeedbackAnalyticsUI };
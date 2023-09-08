// UI Component for Feedback Sentiment Analytics
function FeedbackAnalyticsUI({ analytics }) {
    return (
        <div className="feedback-analytics-ui">
            <h2>Feedback Sentiment Analytics</h2>
            <div>
                <p>Positive: {analytics.positive}%</p>
                <p>Neutral: {analytics.neutral}%</p>
                <p>Negative: {analytics.negative}%</p>
            </div>
        </div>
    );
}

module.exports = { FeedbackAnalyticsUI };
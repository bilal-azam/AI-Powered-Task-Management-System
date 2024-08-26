import React from 'react';

const FeedbackAnalytics = ({ feedbackData }) => {
    return (
        <div>
            <h2>Feedback Analytics</h2>
            <p>Total Feedback: {feedbackData.totalFeedback}</p>
            <p>Positive Feedback: {feedbackData.positive}</p>
            <p>Negative Feedback: {feedbackData.negative}</p>
        </div>
    );
};

export default FeedbackAnalytics;
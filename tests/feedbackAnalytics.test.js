// Test cases for Feedback Sentiment Analytics
const { renderFeedbackAnalytics } = require('../src/pages/admin/feedbackAnalytics');

test('should display sentiment analytics data', () => {
    const analytics = renderFeedbackAnalytics();
    expect(analytics).toHaveProperty('positive');
});
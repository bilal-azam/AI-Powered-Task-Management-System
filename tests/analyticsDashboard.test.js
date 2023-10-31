// Test cases for Advanced Analytics Dashboard
const { generateAnalyticsReport } = require('../src/features/analyticsDashboard');

test('should generate a detailed analytics report', () => {
    const report = generateAnalyticsReport();
    expect(report).toHaveProperty('totalUsers');
    expect(report).toHaveProperty('totalSales');
});
// Test cases for Analytics Dashboard
const { renderAnalyticsDashboard } = require('../src/pages/admin/analyticsDashboard');

test('should display analytics data', () => {
    const data = renderAnalyticsDashboard();
    expect(data).toHaveProperty('totalSales');
});
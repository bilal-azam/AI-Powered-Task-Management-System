// Test cases for User Activity Log System
const { logUserActivity } = require('../src/features/activityLog');

test('should log user activity', () => {
    const result = logUserActivity('user123', 'Viewed product page');
    expect(result).toBe(true);
});
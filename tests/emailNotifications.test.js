// Test cases for Email Notifications
const { sendOrderUpdateEmail } = require('../src/features/emailNotifications');

test('should send order confirmation email', () => {
    const result = sendOrderUpdateEmail('order123', 'user123', 'ORDER_CONFIRMED');
    expect(result).toBe(true);
});
// Test cases for Notification System
const { sendOrderStatusUpdate } = require('../src/features/notificationSystem');

test('should send notification for order status update', () => {
    const result = sendOrderStatusUpdate('user123', 'Shipped');
    expect(result).toBe(true);
});
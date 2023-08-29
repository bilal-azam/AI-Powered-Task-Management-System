// Test cases for Order History Feature
const { getOrderHistory } = require('../src/features/orderHistory');

test('should return order history for a user', () => {
    const history = getOrderHistory('user123');
    expect(history).toBeInstanceOf(Array);
});
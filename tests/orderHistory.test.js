// Test cases for Order History Feature
const { getOrderHistory } = require('../src/features/orderHistory');

test('should retrieve the order history of a user', () => {
    const orders = getOrderHistory('user123');
    expect(Array.isArray(orders)).toBe(true);
});
// Test cases for Loyalty Points System
const { addLoyaltyPoints, getLoyaltyPoints } = require('../src/features/loyaltyPoints');

test('should add loyalty points to a user', () => {
    const result = addLoyaltyPoints('user123', 100);
    expect(result).toBe(true);
});

test('should retrieve the loyalty points of a user', () => {
    const points = getLoyaltyPoints('user123');
    expect(typeof points).toBe('number');
});
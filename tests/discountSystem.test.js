// Test cases for Discount and Coupon System
const { applyDiscount } = require('../src/features/discountSystem');

test('should apply discount with valid coupon code', () => {
    const result = applyDiscount('user123', 'SAVE10');
    expect(result.success).toBe(true);
});
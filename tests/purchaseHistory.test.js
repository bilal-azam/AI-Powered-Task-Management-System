// Test cases for Purchase History Feature
const { renderPurchaseHistory } = require('../src/pages/userProfile');

test('should display purchase history for a user', () => {
    const history = renderPurchaseHistory('user123');
    expect(history).toBeInstanceOf(Array);
});
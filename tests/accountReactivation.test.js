// Test cases for Account Reactivation Feature
const { reactivateAccount } = require('../src/features/accountReactivation');

test('should reactivate user account', () => {
    const result = reactivateAccount('user123');
    expect(result).toBe(true);
});
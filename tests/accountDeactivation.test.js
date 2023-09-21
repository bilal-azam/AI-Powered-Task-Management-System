// Test cases for Account Deactivation Feature
const { deactivateAccount } = require('../src/features/accountDeactivation');

test('should deactivate user account', () => {
    const result = deactivateAccount('user123');
    expect(result).toBe(true);
});
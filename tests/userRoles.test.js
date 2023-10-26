// Test cases for User Roles and Permissions System
const { assignRole, checkPermission } = require('../src/features/userRoles');

test('should assign a role to a user', () => {
    const result = assignRole('user123', 'admin');
    expect(result).toBe(true);
});

test('should check if the user has the correct permission', () => {
    const result = checkPermission('user123', 'deleteProduct');
    expect(result).toBe(true);
});
// Test cases for Wishlist Feature
const { addToWishlist, getUserWishlist } = require('../src/features/wishlist');

test('should add a product to the wishlist', () => {
    const result = addToWishlist('user123', 'product456');
    expect(result).toBe(true);
});

test('should retrieve the wishlist of a user', () => {
    const wishlist = getUserWishlist('user123');
    expect(Array.isArray(wishlist)).toBe(true);
});
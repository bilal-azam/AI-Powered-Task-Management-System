// Test cases for Wishlist Feature
const { addToWishlist, getWishlist } = require('../src/features/wishlist');

test('should add product to wishlist', () => {
    const result = addToWishlist('user123', 'product123');
    expect(result).toBe(true);
});

test('should retrieve user wishlist', () => {
    const wishlist = getWishlist('user123');
    expect(wishlist).toBeInstanceOf(Array);
});
// Test cases for Product Review and Rating System
const { addReview, getProductReviews } = require('../src/features/reviewSystem');

test('should add a review to a product', () => {
    const result = addReview('product123', 'user456', 'Great product!', 5);
    expect(result).toBe(true);
});

test('should retrieve all reviews for a product', () => {
    const reviews = getProductReviews('product123');
    expect(Array.isArray(reviews)).toBe(true);
});
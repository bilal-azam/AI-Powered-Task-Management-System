// Test cases for AI-based Recommendation System
const { recommendProducts } = require('../src/features/recommendationSystem');

test('should recommend products based on user behavior', () => {
    const recommendations = recommendProducts('user123');
    expect(Array.isArray(recommendations)).toBe(true);
});
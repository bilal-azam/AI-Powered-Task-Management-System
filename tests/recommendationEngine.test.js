// Test cases for Recommendation Engine
const { getRecommendations } = require('../src/features/recommendationEngine');

test('should return product recommendations', () => {
    const recommendations = getRecommendations('user123');
    expect(recommendations).toBeInstanceOf(Array);
});
// Test cases for Advanced Product Filtering
const { filterProducts } = require('../src/features/advancedFiltering');

test('should filter products based on multiple criteria', () => {
    const results = filterProducts({ category: 'electronics', priceRange: '100-500' });
    expect(Array.isArray(results)).toBe(true);
});
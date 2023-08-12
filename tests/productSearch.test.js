// Test cases for AI-based Product Search
const { searchProducts } = require('../src/features/productSearch');

test('should return search results for a query', () => {
    const results = searchProducts('laptop');
    expect(results).toBeInstanceOf(Array);
});
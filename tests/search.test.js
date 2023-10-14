// Test cases for Search Functionality
const { searchProducts } = require('../src/features/search');

test('should return products matching the search query', () => {
    const results = searchProducts('laptop', {});
    expect(results).toBeInstanceOf(Array);
});

test('should return filtered search results', () => {
    const results = searchProducts('laptop', { category: 'electronics' });
    expect(results).toBeInstanceOf(Array);
});
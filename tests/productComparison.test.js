// Test cases for Product Comparison Feature
const { compareProducts } = require('../src/features/productComparison');

test('should compare multiple products', () => {
    const comparisonResults = compareProducts(['product123', 'product456']);
    expect(Array.isArray(comparisonResults)).toBe(true);
});
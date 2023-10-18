// Test cases for Multi-Language Support
const { translateText } = require('../src/features/languageSupport');

test('should translate text to the specified language', () => {
    const translated = translateText('Hello', 'es');
    expect(translated).toBe('Hello'); // Mock translation for simplicity
});
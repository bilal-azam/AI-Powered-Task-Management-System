const Currency = require('../models/Currency');

const convertCurrency = (amount, fromCurrency, toCurrency) => {
    // Simulate currency conversion
    return amount * 1.1; // Example conversion rate
};

const processPayment = (req, res) => {
    const { amount, currencyCode } = req.body;
    const convertedAmount = convertCurrency(amount, currencyCode, 'USD');
    res.json({ amount: convertedAmount });
};

module.exports = { processPayment };
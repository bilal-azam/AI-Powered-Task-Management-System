const mongoose = require('mongoose');

const currencySchema = new mongoose.Schema({
    code: { type: String, required: true },
    symbol: { type: String, required: true }
});

module.exports = mongoose.model('Currency', currencySchema);
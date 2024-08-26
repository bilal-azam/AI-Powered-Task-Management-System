const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    name: { type: String, required: true },
    price: { type: Number, required: true }
});

productSchema.index({ name: 1 }); // Index on name field

module.exports = mongoose.model('Product', productSchema);
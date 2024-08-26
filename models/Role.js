const mongoose = require('mongoose');

const roleSchema = new mongoose.Schema({
    name: { type: String, required: true },
    permissions: [String]
});

module.exports = mongoose.model('Role', roleSchema);
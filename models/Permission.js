const mongoose = require('mongoose');

const permissionSchema = new mongoose.Schema({
    name: { type: String, required: true }
});

module.exports = mongoose.model('Permission', permissionSchema);
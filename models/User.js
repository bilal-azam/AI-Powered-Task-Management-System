const mongoose = require('mongoose');
const Role = require('./Role');

const userSchema = new mongoose.Schema({
    username: { type: String, required: true, unique: true },
    role: { type: mongoose.Schema.Types.ObjectId, ref: 'Role' }
});

module.exports = mongoose.model('User', userSchema);
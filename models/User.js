const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    username: { type: String, required: true },
    email: { type: String, required: true },
    avatar: { type: String } // URL of the avatar image
});

module.exports = mongoose.model('User', userSchema);
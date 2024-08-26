const mongoose = require('mongoose');

const userRoleSchema = new mongoose.Schema({
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    role: { type: mongoose.Schema.Types.ObjectId, ref: 'Role' }
});

module.exports = mongoose.model('UserRole', userRoleSchema);
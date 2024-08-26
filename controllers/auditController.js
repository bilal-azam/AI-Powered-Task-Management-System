const AuditLog = require('../models/AuditLog');

const logAction = async (action, userId) => {
    const log = new AuditLog({ action, user: userId });
    await log.save();
};

module.exports = { logAction };
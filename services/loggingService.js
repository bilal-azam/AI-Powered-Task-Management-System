const fs = require('fs');
const path = require('path');

const logActivity = (message) => {
    const logFile = path.join(__dirname, '../logs/activity.log');
    fs.appendFileSync(logFile, `${new Date().toISOString()} - ${message}\n`);
};

module.exports = { logActivity };
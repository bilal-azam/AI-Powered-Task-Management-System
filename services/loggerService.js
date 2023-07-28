const fs = require('fs');
const path = require('path');

const logAction = (action, details) => {
    const logEntry = `${new Date().toISOString()} - ${action}: ${JSON.stringify(details)}`;
    fs.appendFileSync(path.join(__dirname, '../logs/actions.log'), logEntry + '\n');
};

module.exports = { logAction };
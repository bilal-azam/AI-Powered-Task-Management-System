const { backupData } = require('../services/backupService');

// Run backup every day at midnight
setInterval(() => {
    backupData();
}, 24 * 60 * 60 * 1000);
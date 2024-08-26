const fs = require('fs');
const path = require('path');

const backupData = () => {
    const backupFile = path.join(__dirname, '../backups/backup.json');
    const data = { message: 'Backup data' };

    fs.writeFileSync(backupFile, JSON.stringify(data, null, 2));
    console.log('Data backed up');
};

module.exports = { backupData };
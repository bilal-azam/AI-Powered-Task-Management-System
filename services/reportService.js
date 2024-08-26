const fs = require('fs');
const path = require('path');
const { generateReportData } = require('./dataService');

const generateReport = () => {
    const reportData = generateReportData();
    const filePath = path.join(__dirname, '../reports/report.csv');
    
    fs.writeFileSync(filePath, reportData);
    return filePath;
};

module.exports = { generateReport };
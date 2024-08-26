const { generateReport } = require('../services/reportService');

const downloadReport = (req, res) => {
    const filePath = generateReport();
    res.download(filePath);
};

module.exports = { downloadReport };
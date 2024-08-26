const { generateReportData } = require('../services/analyticsService');

const getDashboardData = (req, res) => {
    const reportData = generateReportData();
    res.json({ reportData });
};

module.exports = { getDashboardData };
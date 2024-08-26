const getAnalyticsData = async (req, res) => {
    // Sample data
    const data = {
        labels: ['January', 'February', 'March'],
        values: [30, 45, 60]
    };
    res.json(data);
};

module.exports = { getAnalyticsData };
const getAnalyticsData = (req, res) => {
    // Simulated analytics data
    const analytics = {
        users: 1234,
        sales: 5678
    };
    res.json(analytics);
};

module.exports = { getAnalyticsData };
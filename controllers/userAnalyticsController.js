const getUserAnalytics = async (req, res) => {
    // Sample data
    const userData = {
        totalUsers: 1200,
        activeUsers: 800,
        inactiveUsers: 400
    };
    res.json(userData);
};

module.exports = { getUserAnalytics };
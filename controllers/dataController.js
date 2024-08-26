const { setCache, getCache } = require('../services/cacheService');

const getData = async (req, res) => {
    const cacheKey = 'data_key';
    const cachedData = getCache(cacheKey);

    if (cachedData) {
        return res.json(cachedData);
    }

    // Simulate data fetching
    const data = { message: 'Fetched data from DB' };

    setCache(cacheKey, data);
    res.json(data);
};

module.exports = { getData };
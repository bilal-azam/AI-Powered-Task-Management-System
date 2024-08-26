const { setCache, getCache } = require('../services/cacheService');

const fetchData = async (req, res) => {
    const { key } = req.params;
    let data = getCache(key);
    if (!data) {
        // Fetch data from the database or another source
        data = 'Fetched Data'; // Placeholder
        setCache(key, data);
    }
    res.json({ data });
};

module.exports = { fetchData };
const NodeCache = require('node-cache');
const cache = new NodeCache();

const getCachedData = (key) => {
    return cache.get(key);
};

const setCacheData = (key, value, ttl) => {
    cache.set(key, value, ttl);
};

module.exports = { getCachedData, setCacheData };
const cache = new Map();

const cacheMiddleware = (req, res, next) => {
    const key = req.originalUrl || req.url;
    if (cache.has(key)) {
        return res.json(cache.get(key));
    }
    res.sendResponse = res.send;
    res.send = (body) => {
        cache.set(key, body);
        res.sendResponse(body);
    };
    next();
};

module.exports = cacheMiddleware;
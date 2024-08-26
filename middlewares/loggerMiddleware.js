const { logActivity } = require('../services/loggingService');

const loggerMiddleware = (req, res, next) => {
    logActivity(req.method} + ' ' + req.originalUrl);
    next();
};

module.exports = loggerMiddleware;
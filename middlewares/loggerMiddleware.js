const logger = require('../services/newLoggingService');

const loggerMiddleware = (req, res, next) => {
    logger.info(req.method + ' ' + req.originalUrl);
    next();
};

module.exports = loggerMiddleware;
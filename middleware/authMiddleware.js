const { authenticateToken } = require('../config/auth');

const authMiddleware = (req, res, next) => {
    authenticateToken(req, res, next);
};

module.exports = authMiddleware;
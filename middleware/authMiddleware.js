const jwt = require('jsonwebtoken');
const secretKey = 'your-secret-key';

const authenticateToken = (req, res, next) => {
    const token = req.header('Authorization');
    if (!token) return res.status(401).send('Access denied');

    jwt.verify(token, secretKey, (err, user) => {
        if (err) return res.status(403).send('Forbidden');
        req.user = user;
        next();
    });
};

module.exports = authenticateToken;
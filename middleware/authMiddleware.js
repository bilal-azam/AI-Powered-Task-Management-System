const jwt = require('jsonwebtoken');
const User = require('../models/User');

const authenticateJWT = (req, res, next) => {
    const token = req.header('Authorization')?.split(' ')[1];
    if (token) {
        jwt.verify(token, process.env.JWT_SECRET, async (err, user) => {
            if (err) return res.sendStatus(403);
            req.user = await User.findById(user.id);
            next();
        });
    } else {
        res.sendStatus(401);
    }
};

module.exports = { authenticateJWT };
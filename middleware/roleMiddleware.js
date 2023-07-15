const User = require('../models/User');

const checkRole = (role) => {
    return async (req, res, next) => {
        try {
            const user = await User.findById(req.user.id);
            if (!user || user.role !== role) {
                return res.status(403).json({ message: 'Access denied' });
            }
            next();
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    };
};

module.exports = { checkRole };
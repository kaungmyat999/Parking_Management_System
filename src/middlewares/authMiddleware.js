const jwt = require('jsonwebtoken');
const User = require('../models/user');

const authMiddleware = (roles = []) => {
    return async (req, res, next) => {
        try {
            const token = req.headers['authorization']?.split(' ')[1];
            if (!token) {
                return res.status(401).json({ message: 'Unauthorized' });
            }

            const decoded = jwt.verify(token, process.env.JWT_SECRET);
            req.user = await User.findById(decoded.id).select('-password');

            if (!req.user) {
                return res.status(401).json({ message: 'Unauthorized' });
            }

            if (roles.length && !roles.includes(req.user.role)) {
                return res.status(403).json({ message: 'Forbidden' });
            }

            next();
        } catch (error) {
            return res.status(401).json({ message: 'Unauthorized', error: error.message });
        }
    };
};

authMiddleware.verifyToken = authMiddleware();
module.exports = authMiddleware;
// middlewares/auth.js
const jwt = require('jsonwebtoken');
const ENV = require('../config/env');

const authenticate = (req, res, next) => {
    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split(' ')[1];

    if (!token) {
        return res.status(401).json({
            message: 'Access denied. No token provided.'
        });
    }

    try {
        const decoded = jwt.verify(token, ENV.JWT_SECRET);
        req.user = decoded;
        next();
    } catch (err) {
        res.status(403).json({
            message: 'Invalid or expired token'
        });
    }
};

module.exports = authenticate;
const jwt = require('jsonwebtoken');
require('dotenv').config();
const getGenerateSecretKey = process.env.SECRET_KEY;

const authMiddleware = (req, res, next) => {
    const authHeader = req.headers['authorization'];
    if (!authHeader) {
        return res.status(401).json({ message: 'Authorization header is missing' });
    }

    const token = authHeader.split(' ')[1];
    if (!token) {
        return res.status(401).json({ message: 'Token is missing' });
    }

    try {
        console.log('Using secret key:', getGenerateSecretKey);
        const payload = jwt.verify(token, getGenerateSecretKey);
        req.user = payload;
        next();
    } catch (err) {
        console.error('Token verification error:', err);
        return res.status(401).json({ message: 'Invalid token' });
    }
};

module.exports = authMiddleware;

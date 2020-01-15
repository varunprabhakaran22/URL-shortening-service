const jwt = require('jsonwebtoken');
const config = require('config');

module.exports = (req, res, next) => {
    try {
        const { token } = req.body
        const jwtkey = config.get('JWT_KEY')
        const decoded = jwt.verify(token, jwtkey);
        req.userData = decoded;
        next();
    } catch (error) {
        return res.status(401).json({
            message: 'Auth failed'
        });
    }
};
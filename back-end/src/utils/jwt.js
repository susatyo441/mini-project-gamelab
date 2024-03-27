const jsonWebToken = require('jsonwebtoken');
const dotenv = require('dotenv');
dotenv.config();

const generateAccessToken = user => {
    return jsonWebToken.sign(user, process.env.JWT_SECERET, {
        expiresIn: process.env.JWT_EXPIRES_IN || '1800s',
    });
};

const generateRefreshToken = user => {
    return jsonWebToken.sign(user, process.env.JWT_REFRESH_SECERET, {
        expiresIn: process.env.JWT_REFRESH_EXPIRES_IN || '86400s',
    });
};

const verifyAccessToken = token => {
    try {
        return jsonWebToken.verify(token, process.env.JWT_SECERET);
    } catch (error) {
        return null;
    }
};

module.exports = {
    generateAccessToken,
    generateRefreshToken,
    verifyAccessToken
}
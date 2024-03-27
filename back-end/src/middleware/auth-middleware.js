const { ResponseError } = require("../error/response-error.js");
const { verifyAccessToken } = require("../utils/jwt.js");

const authentication = (req, res, next) => {
    const authHeader = req.headers["authorization"];
    const token = authHeader && authHeader.split(" ")[1];

    if (!token) {
        throw new ResponseError(401, false, "Unauthorized", null);
    }

    const user = verifyAccessToken(token);
    if (!user) {
        throw new ResponseError(401, false, "Unauthorized", null);
    }

    req.user = user;
    next();
};

module.exports = {
    authentication,
};

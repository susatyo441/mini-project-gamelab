const { ResponseError } = require("../error/response-error.js");
const User = require("../models/user-model.js");
const { generateAccessToken, generateRefreshToken } = require("../utils/jwt.js");
const loginUserValidation = require("../validation/user-validation.js");
const validate = require("../validation/validation.js");
const bcrypt = require("bcrypt");

const login = async (req, res, next) => {
    try {
        const userLogin = await validate(loginUserValidation, req.body, res);

        const userExists = await User.findOne({
            where: {
                email: userLogin.email,
            }
        });
        if (!userExists) {
            throw new ResponseError(401, false, 'Email or password wrong', null);
        }

        const isPasswordValid = bcrypt.compareSync(userLogin.password, userExists.password);
        if (!isPasswordValid) {
            throw new ResponseError(401, false, 'Email or password wrong', null);
        }

        const usr = {
            id: userExists.id,
            name: userExists.name,
            email: userExists.email,
            password: userExists.password,
        };
        const token = generateAccessToken(usr);
        // const refreshToken = generateRefreshToken(usr);


        await User.update(
            {
                token: token
            },
            {
                where: {
                    email: userExists.email
                }
            }
        );
        return res.status(200).json({
            status: true,
            statusResponse: 200,
            message: "Login successfully",
            data: { ...usr, token: token },
            // accessToken: token,
            // refreshToken: refreshToken

        });
    } catch (error) {
        next(error);
    }
}


const logout = async (req, res, next) => {
    try {
        const email = req.user.email;
        await User.update(
            {
                token: null
            },
            {
                where: {
                    email: email
                }
            }
        );
        return res.status(200).json({
            status: true,
            statusResponse: 200,
            message: "Logout successfully"
        });
    } catch (error) {
        next(error);
    }
};

module.exports = {
    login,
    logout
};
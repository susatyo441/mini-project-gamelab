const Joi = require("joi");

const loginUserValidation = Joi.object({
    email: Joi.string().max(100).required().email(),
    password: Joi.string().max(100).required(),
});

module.exports = loginUserValidation
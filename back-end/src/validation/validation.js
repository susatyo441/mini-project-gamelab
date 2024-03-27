const { ResponseError } = require("../error/response-error.js");

const validate = (schema, request, res) => {
    const result = schema.validate(request, {
        abortEarly: false,
        allowUnknown: false
    });

    if (result.error) {
        const errorDetails = result.error.details.map((detail) => {
            return {
                [detail.context.key]: detail.message.replace(/['"]/g, "")
            };
        });

        const errorObject = errorDetails.reduce((acc, item) => {
            const key = Object.keys(item)[0];
            acc[key] = acc[key] || [];
            acc[key].push(item[key]);
            return acc;
        }, {});
        throw new ResponseError(400, false, errorObject, null);
    } else {
        return result.value;
    }
};

module.exports = validate

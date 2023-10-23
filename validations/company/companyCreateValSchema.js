const joi = require("joi")
const companyCreateValSchema = {
    createCompany: joi
        .object({
            companyName: joi
                .string()
                .min(3)
                .min(5)
                .message({
                    "string.min": "{#lable} should contain at least {#limit} chracter",
                })
                .required(),
            companyCity: joi.string().required(),
            companyLocation: joi.string().required(),
        })
        .unknown(true),
};
module.exports = companyCreateValSchema;


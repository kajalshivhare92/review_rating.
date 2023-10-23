const joi = require("joi");
const { joiPasswordExtendCore } = require("joi-password");
const joiPassword = joi.extend(joiPasswordExtendCore);

const userValSchema = {
    registerUser: joi
        .object({
            userName: joi
                .string()
                .min(3)
                .max(20)
                .message({
                    "string.min": "{#label} should contain at least {#limit} character",
                    "string.max": "{#label} should contain not more than {#limit} character",
                })
                .required(),
            userPhone: joi
                .number()
                .integer()
                .min(1000000000)
                .max(9999999999)
                .message("Invalid Mobile Number")
                .required(),
            userEmail: joi
                .string()
                .email()
                .message("invalid email address")
                .required(),
            userPassword: joiPassword
                .string()
                .minOfSpecialCharacters(1)
                .minOfLowercase(1)
                .minOfUppercase(1)
                .minOfNumeric(1)
                .noWhiteSpaces()
                .onlyLatinCharacters()
                .messages({
                    'password.minOfUppercase': '{#label} should contain at least {#min} uppercase character',
                    'password.minOfSpecialCharacters':
                        '{#label} should contain at least {#min} special character',
                    'password.minOfLowercase': '{#label} should contain at least {#min} lowercase character',
                    'password.minOfNumeric': '{#label} should contain at least {#min} numeric character',
                    'password.noWhiteSpaces': '{#label} should not contain white spaces',
                    'password.onlyLatinCharacters': '{#label} should contain only latin characters',
                })
                .required(),
            userCity: joi.string().required(),
            userState: joi.string().required(),
        })
        .unknown(true),

    // const userlogInValSchema = {
    userlogIn: joi
        .object({
            userEmail: joi
                .string()
                .email()
                .message("invalid email address")
                .required(),
            userPassword: joiPassword
                .string()
                .minOfSpecialCharacters(1)
                .minOfLowercase(1)
                .minOfUppercase(1)
                .minOfNumeric(1)
                .noWhiteSpaces()
                .onlyLatinCharacters()
                .messages({
                    'password.minOfUppercase': '{#label} should contain at least {#min} uppercase character',
                    'password.minOfSpecialCharacters':
                        '{#label} should contain at least {#min} special character',
                    'password.minOfLowercase': '{#label} should contain at least {#min} lowercase character',
                    'password.minOfNumeric': '{#label} should contain at least {#min} numeric character',
                    'password.noWhiteSpaces': '{#label} should not contain white spaces',
                    'password.onlyLatinCharacters': '{#label} should contain only latin characters',
                })
                .required(),
        })
        .unknown(true),
}

module.exports = userValSchema;



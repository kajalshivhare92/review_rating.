const joi = require("joi")
const reviewCreateValSchema = {
    createReview: joi
        .object({
            companyReviewSubject: joi
                .string()
                .min(3)
                .max(20)
                .message({
                    "string.min": "{#lable} should contain at least {#limit} chracter",
                })
                .required(),
            companyReview: joi
                .string(8)
                .min()
                .max()
                .message({
                    "string.min": "{#lable} should contain at least {#limit} chracter",
                })
                .required(),
            companyReviewRating: joi
                .number()
                .required()
                .message({
                })
        }).unknown(true),
}

module.exports = reviewCreateValSchema

const companyCreateValSchema = require("./companyCreateValSchema")

module.exports = {
    createCompanyValidation: async (req, res, next) => {
        let isValid = await companyCreateValSchema.createCompany.validate(
            req.body, {
            isEarly: false,
        }
        );
        if (isValid.error) {
            // req.file ? unlinksync(req.file.path) : null;
            res.status(403).json({
                success: false,
                message: isValid.error.details[0].message,
            });
        } else {
            next();
        }
    }
}









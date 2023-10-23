let express = require("express")
const companyRouter = express.Router()

const { userAuthentication } = require("../middlewares/authToken");
const { authorizeAdmin } = require("../middlewares/autorization");
let companyController = require('../controllers/companyController');
const {companyUpload} = require('../middlewares/companyImageStorage');
const companyDataValidations = require("../validations/company/companyDataValidations");

companyRouter.post("/create", companyUpload.single("companyPic"), userAuthentication, authorizeAdmin,
    companyDataValidations.createCompanyValidation, companyController.createCompany)
companyRouter.get("/details/:id", userAuthentication, companyController.companyDetail)
companyRouter.get("/list", companyController.companyList)
companyRouter.post("/city", companyController.SearchCompany)

module.exports = companyRouter


let express = require("express")
let companyaReviewController = require('../controllers/companyReviewController')

const reviewRouter = express.Router();
reviewRouter.post("/addreview", companyaReviewController.createReview)

module.exports = reviewRouter;



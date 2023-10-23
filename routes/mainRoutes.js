const express = require("express")
const userRouter = require("../routes/userRoutes")
const companyRouter = require("./companyRoutes");
const reviewRouter = require("./companyReviewRoutes");

const mainRouter = express.Router();
mainRouter.use("/user", userRouter)
mainRouter.use("/company", companyRouter)
mainRouter.use("/review", reviewRouter)

module.exports = mainRouter

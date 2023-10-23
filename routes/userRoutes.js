let express = require("express")
const userRouter = express.Router();

let userController = require('../controllers/userController')
const {
    registerUserValidation,
    logInUserValidation,
} = require("../validations/user/userDataValidations");
const{ userUpload}  = require('../middlewares/userImageStorage')

userRouter.post(
    "/create",
   userUpload.single("profilePic"),
    registerUserValidation,
    userController.createUser
);

userRouter.post("/login", logInUserValidation, userController.userLogIn);
userRouter.post("/resetpassword/:id/:token", userController.resetpassword)
userRouter.post("/resetpasswordEmail", userController.sendUserPasswordEmail);

module.exports = userRouter

const express = require("express");
const routes = require(".");
const {
    users,
    userDetail,
    editProfile,
    changePassword,
} = require("../controllers/userController");

const userRouter = express.Router();

userRouter.get(routes.userDetail, userDetail);
userRouter.get(routes.editProfile, editProfile);
userRouter.get(routes.changePassword, changePassword);

module.exports = userRouter;

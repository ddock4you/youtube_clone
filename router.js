const express = require("express");

const userRouter = express.Router();

userRouter.get("/", (req, res) => res.send("유저"));
userRouter.get("/id", (req, res) => res.send("유저아이디"));
userRouter.get("/hi", (req, res) => res.send("유저hi"));

module.exports = userRouter;

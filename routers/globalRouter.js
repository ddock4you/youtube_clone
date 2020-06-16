const express = require("express");

const globalRouter = express.Router();

globalRouter.get("/", (req, res) => res.render("home"));

module.exports = globalRouter;

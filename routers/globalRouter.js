const express = require("express");

const globalRouter = express.Router();

globalRouter.get("/", (req, res) => res.render("home", { pageTitle: "Home" }));

module.exports = globalRouter;

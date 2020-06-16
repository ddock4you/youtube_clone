const express = require("express");

const globalRouter = express.Router();

globalRouter.get("/", (req, res) => res.send("a"));

module.exports = globalRouter;

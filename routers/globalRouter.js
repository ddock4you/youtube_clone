const express = require("express");
const { home, search } = require("../controllers/videoController");
const { join, login, logout } = require("../controllers/userController");
const routes = require(".");

const globalRouter = express.Router();

globalRouter.get(routes.home, home);
globalRouter.get(routes.search, search);
globalRouter.get(routes.join, join);
globalRouter.get(routes.login, login);
globalRouter.get(routes.logout, logout);

module.exports = globalRouter;

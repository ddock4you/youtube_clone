const express = require("express");
const { home, search } = require("../controllers/videoController");
const {
    getJoin,
    postJoin,
    getLogin,
    postLogin,
    logout,
} = require("../controllers/userController");
const routes = require(".");

const globalRouter = express.Router();

globalRouter.get(routes.home, home);
globalRouter.get(routes.search, search);
globalRouter.get(routes.join, getJoin);
globalRouter.post(routes.join, postJoin);
globalRouter.get(routes.login, getLogin);
globalRouter.post(routes.login, postLogin);
globalRouter.get(routes.logout, logout);

module.exports = globalRouter;

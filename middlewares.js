const routes = require("./routers");

const localsMiddlewares = (req, res, next) => {
    res.locals.siteName = "Wetube";
    res.locals.routes = routes;
    next();
};

module.exports = localsMiddlewares;

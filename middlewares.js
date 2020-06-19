const routes = require("./routers");

const localsMiddlewares = (req, res, next) => {
    res.locals.siteName = "Wetube";
    res.locals.routes = routes;
    res.locals.user = {
        id: 1,
    };
    next();
};

module.exports = localsMiddlewares;

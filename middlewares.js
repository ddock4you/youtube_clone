const localsMiddlewares = (req, res, next) => {
    res.locals.siteName = "Wetube";
    next();
};

module.exports = localsMiddlewares;

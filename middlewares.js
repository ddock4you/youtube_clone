const routes = require("./routers");
const multer = require("multer");
const upload = multer({ dest: "uploads/videos/" });
const uploadFile = upload.single("videoFile");

const localsMiddlewares = (req, res, next) => {
    res.locals.siteName = "Wetube";
    res.locals.routes = routes;
    res.locals.user = {
        id: 1,
    };
    next();
};

module.exports = { localsMiddlewares, uploadFile };

const routes = require("../routers");

const home = (req, res) => res.render("home", { pageTitle: "Home", videos });

const search = (req, res) => {
    const {
        query: { term: searchingBy },
    } = req;
    res.render("search", { searchingBy, videos });
};

const getUpload = (req, res) => res.render("upload");

const postUpload = (req, res) => {
    const {
        body: { file, title, Description },
    } = req;
    res.redirect(routes.videoDetail(324393));
};

const videoDetail = (req, res) => res.render("videoDetail");

const editVideo = (req, res) => res.render("editVideo");

const deleteVideo = (req, res) => res.render("deleteVideo");

module.exports = {
    home,
    search,
    getUpload,
    postUpload,
    videoDetail,
    editVideo,
    deleteVideo,
};

const videos = require("../db");

const home = (req, res) => res.render("home", { pageTitle: "Home", videos });

const search = (req, res) => {
    const {
        query: { term: searchingBy },
    } = req;
    res.render("search", { searchingBy });
};

const upload = (req, res) => res.render("upload");

const videoDetail = (req, res) => res.render("videoDetail");

const editVideo = (req, res) => res.render("editVideo");

const deleteVideo = (req, res) => res.render("deleteVideo");

module.exports = {
    home,
    search,
    upload,
    videoDetail,
    editVideo,
    deleteVideo,
};

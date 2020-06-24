const routes = require("../routers");
const Video = require("../models/Video");

const home = async (req, res) => {
    try {
        const videos = await Video.find({});
        console.log(videos);
        res.render("home", { pageTitle: "Home", videos });
    } catch (error) {
        console.error(error);
        res.render("home", { pageTitle: "Home", videos: {} });
    }
};

const search = (req, res) => {
    const {
        query: { term: searchingBy },
    } = req;
    res.render("search", { searchingBy, videos });
};

const getUpload = (req, res) => res.render("upload");

const postUpload = async (req, res) => {
    const {
        body: { title, description },
        file: { path },
    } = req;
    const newVideo = await Video.create({
        fileUrl: path,
        title,
        description,
    });
    res.redirect(routes.videoDetail(newVideo.id));
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

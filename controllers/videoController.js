const routes = require("../routers");
const Video = require("../models/Video");
const { findById } = require("../models/Video");

const home = async (req, res) => {
    try {
        const videos = await Video.find({}).sort({ _id: -1 });
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

const videoDetail = async (req, res) => {
    try {
        const {
            params: { id },
        } = req;
        const video = await Video.findById(id);
        console.log(video.fileUrl);
        res.render("videoDetail", { pageTitle: video.title, video });
    } catch (error) {
        console.log(error);
        res.redirect("/");
    }
};

const getEditVideo = async (req, res) => {
    try {
        const {
            params: { id },
        } = req;
        const video = await Video.findById(id);
        res.render("editVideo", { video });
    } catch (error) {
        res.redirect("/");
    }
};

const postEditVideo = async (req, res) => {
    try {
        const {
            params: { id },
        } = req;
        const {
            body: { title, description },
        } = req;
        await Video.findOneAndUpdate({ _id: id }, { title, description });
        res.redirect(routes.videoDetail(id));
    } catch (error) {
        res.redirect("/");
    }
};

const deleteVideo = async (req, res) => {
    try {
        const {
            params: { id },
        } = req;
        await Video.findOneAndDelete(id);
    } catch {}
    res.redirect("/");
};

module.exports = {
    home,
    search,
    getUpload,
    postUpload,
    videoDetail,
    getEditVideo,
    postEditVideo,
    deleteVideo,
};

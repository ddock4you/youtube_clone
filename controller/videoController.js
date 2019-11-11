import routes from '../routes';
import Video from '../models/Video';

export const home = async(req, res) => {
    try {
        const videos = await Video.find({});
        res.render('home', {pageTitle: 'home', videos});

    } catch(error) {
        console.log(error);
        res.render('home', {pageTitle: 'home', videos: []});
    }

}

export const search = (req, res) => {
    const {
        query: { term: searchingBy }
    } = req
    // console.log(searchingBy);
    res.render('search', {pageTitle: 'search', searchingBy, videos});
}

// export const videos = (req, res) => res.render('videos', {pageTitle: 'videos'});
export const getUpload = (req, res) => {
    res.render('upload', {pageTitle: 'upload'});
}

export const postUpload = async(req, res) => {
    const {
        body: {title, description},
        file: {path}
    } = req;
    // console.log(body);
    try {
        const newVideo = await Video.create({
            fileUrl: path,
            title,
            description
        });
        res.redirect(routes.videoDetail(newVideo.id));
    } catch(error) {
        console.log(error);
    }
}

export const videoDetail = async (req, res) => {
    const {
        params: {id}
    } = req;
    const video = await Video.findById(id);

    res.render('videoDetail', {pageTitle: videoDetail, video});
}
    
export const editVideo = (req, res) => res.render('editVideo', {pageTitle: 'editVideo'});
export const deleteVideo = (req, res) => res.render('deleteVideo', {pageTitle: 'deleteVideo'});

import routes from '../routes';
import Video from '../models/Video';

export const home = async(req, res) => {
    try {
        const videos = await Video.find({}).sort({ _id: -1});
        res.render('home', {pageTitle: 'home', videos});

    } catch(error) {
        console.log(error);
        res.render('home', {pageTitle: 'home', videos: []});
    }

}

export const search = async (req, res) => {
    const {
        query: { term: searchingBy }
    } = req
    let videos = [];
    try {
        videos = await Video.find({
            title: {$regex: searchingBy, $options: 'i'}
        });
    } catch (error) {
        console.log(error);
    }

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
    
    const newVideo = await Video.create({
        fileUrl: path,
        title,
        description,
        creator: req.user.id
    });
    console.log(req.user);
    req.user.videos.push(newVideo.id);
    req.user.save();
    res.redirect(routes.videoDetail(newVideo.id));
}

export const videoDetail = async (req, res) => {
    const {
        params: {id}
    } = req;
    try {
        const video = await Video.findById(id).populate('creator');
        console.log(video);
        res.render('videoDetail', {pageTitle: 'videoDetail', video});
    } catch (error) {
        console.log(error);
        // res.redirect(routes.home);
    }
}
    
export const getEditVideo =async (req, res) => {
    const {
        params: {id}
    } = req;
    try {
        const video = await Video.findById(id);
        res.render('editVideo', {pageTitle: 'editVideo', video});
    } catch(error) {
        res.redirect(routes.home);

    }
}

export const postEditVideo = async (req, res) => {
    const {
        params: {id},
        body: {title, description}
    } = req;
    try {
        await Video.findOneAndUpdate({ _id: id }, { title, description });
        res.redirect(routes.videoDetail(id));
    } catch (error) {
        res.redirect(routes.home);
    }
    // res.render('editVideo', {pageTitle: 'editVideo'});
}


export const deleteVideo = async (req, res) => {
    const {
        params: {id},
    } = req;

    try {
        await Video.findOneAndRemove({ _id: id });
    } catch (error) {

    }
    res.redirect(routes.home);
}

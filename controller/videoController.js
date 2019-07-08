// global
// reder 함수의 첫번째 인자는 템플릿, 두번째 인자는 템플릿에 추가할 정보가 담긴 객체
// export const home =(req, res) => res.send('home');
import {videos} from "../db";
import routes from "../routes";

export const home =(req, res) => res.render('home', {pageTitle: 'home' ,videos});


export const search = (req, res) => {
    const {query: { term:searchingBy  }} = req;
    console.log(searchingBy);
    res.render('search', {pageTitle: 'search', searchingBy, videos})
    // form에서 전달받은 name과 해당 name에서 입력된 값이 req.query에 저장되어 있음.
};


// video

// export const videos = (req, res) => res.render('videos', {pageTitle: 'videos'});

export const getUpload = (req, res) => {
    res.render('upload', {pageTitle: 'upload'});
}

export const postUpload = (req, res) => {
    const {
        body: {file, title, description}
    } = req;

    // To do : Upload and save video
    res.redirect(routes.videoDetail(324393));
}

export const videoDetail = (req, res) => res.render('videoDetail', {pageTitle: 'Video Detail'});

export const editVideo = (req, res) => res.render('editVideo', {pageTitle: 'Edit Video'});

export const deleteVideo = (req, res) => res.render('deleteVideo', {pageTitle: 'Detail Video'});
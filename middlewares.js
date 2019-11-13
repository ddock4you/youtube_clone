import routes from './routes';
import multer from 'multer';

const multerVideo = multer({dest: 'uploads/videos'});

export const middlewares = (req, res, next) => {
    res.locals.siteName = 'Wetube';
    res.locals.routes = routes;
    res.locals.user = {
        id: 1,
        isAuthenticated: false
    }
    next();
}

export const uploadVideo = multerVideo.single('videoFile');


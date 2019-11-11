import routes from './routes';
import multer from 'multer';

const multerVideo = multer({dest: 'videos'});

export const middlewares = (req, res, next) => {
    res.locals.siteName = 'Wetube';
    res.locals.routes = routes;
    res.locals.user = {
        id: 1,
        isAuthenticated: true
    }
    next();
}

export const uploadVideo = multerVideo.single('videoFile');
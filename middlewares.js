import routes from './routes';
import multer from 'multer';
import { existentialTypeParam } from 'babel-types';

const multerVideo = multer({dest: 'uploads/videos'});

export const middlewares = (req, res, next) => {
    res.locals.siteName = 'Wetube';
    res.locals.routes = routes;
    res.locals.user = req.user || null;
    next();
}

export const onlyPublic = (req, res, next) => {
    if(req.user) {
        res.redirect(routes.home);
    } else {
        next();
    }
}

export const onlyPrivate = (req, res, next) => {
    if(req.user) {
        next();
    } else {
        res.redirect(routes.home);
    }
}

export const uploadVideo = multerVideo.single('videoFile');


import routes from './routes';
import multer from 'multer';
import { existentialTypeParam } from 'babel-types';

const multerVideo = multer({dest: 'uploads/videos'});
const multarAvatar = multer({dest: 'uploads/avatar'});

export const middlewares = (req, res, next) => {
    res.locals.siteName = 'Wetube';
    res.locals.routes = routes;
    res.locals.loggedUser = req.user || null;
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
export const uploadAvatar = multarAvatar.single('avatar');

import routes from './routes';

export const middlewares = (req, res, next) => {
    res.locals.siteName = 'Wetube';
    res.locals.routes = routes;
    res.locals.user = {
        id: 1,
        isAuthenticated: true
    }
    next();
}
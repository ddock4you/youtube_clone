import express from 'express';
import routes from '../routes';

const videoRouter = express.Router();

videoRouter.get(routes.home, (req, res) => res.send('video'));
videoRouter.get(routes.upload, (req, res) => res.send('video upload'));
videoRouter.get(routes.videoDetail, (req, res) => res.send('video videoDetail'));
videoRouter.get(routes.editVideo, (req, res) => res.send('video editVideo'));
videoRouter.get(routes.deleteVideo, (req, res) => res.send('video deleteVideo'));

export default videoRouter;
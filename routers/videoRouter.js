import express from 'express';

const videoRouter = express.Router();

videoRouter.get('/', (req, res) => res.send('video index'));
videoRouter.get('/edit', (req, res) => res.send('video edit'));
videoRouter.get('/password', (req, res) => res.send('video password'));

export default videoRouter;
// const express = require('express');
import express from 'express';
import morgan from 'morgan';
import helmet from 'helmet';
import cookieParser from 'cookie-parser';
import bodyParser from 'body-parser';
import userRouter from './routers/userRouter';
import videoRouter from './routers/videoRouter';
import globalRouter from './routers/globalRouter';
import routes from './routes';
import { localsMiddleware } from './middlewares';

const app = express();


app.set('view engine', 'pug');
// middleware setting
// morgan: 서버 상태, 페이지 이동 했을 때 간략한 정보 제공(접속자 브라우저 정보 등)
// node.js 보안 앱
app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true}));
app.use(helmet());
app.use(morgan('dev')); //other option: tiny, combine



// 미들웨어를 통해 변수 내 정보를 템플릿으로 보낼 수 있다.
// local 기능을 통해 템플릿에서도 변수에 접근할 수 있다.
app.use(localsMiddleware);
app.use(routes.home, globalRouter);
app.use(routes.users, userRouter);
app.use(routes.videos, videoRouter);
export default app;
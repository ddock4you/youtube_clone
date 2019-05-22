// const express = require('express');
import express from 'express';
import morgan from 'morgan';
import helmet from 'helmet';
import cookieParser from 'cookie-parser';
import bodyParser from 'body-parser';
import { userRouter } from './router';

const app = express();

const handleHome = (req, res) => {
    res.send('Hello from home');
}

const handleProfile = (req, res) => {
    res.send('You are on my profile');
}

// middleware setting
// morgan: 서버 상태, 페이지 이동 했을 때 간략한 정보 제공(접속자 브라우저 정보 등)
app.use(morgan('dev')); //other option: tiny, combine
// node.js 보안 앱
app.use(helmet());
app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true}));

// 루트에 접속했을 경우
app.get('/', handleHome);
app.get('/profile', handleProfile);
app.use('/use', userRouter);

export default app;
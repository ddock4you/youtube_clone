const express = require('express');
const app = express();
const PORT = 4000;

// localhost:  현재 컴퓨터의 내부 주소
// port: 프로세스를 구분하는 번호 
const handleListening = () => {
    console.log(`Listening on: http://localhost:${PORT}`);
}


// req -> requset(서버로 요청)
// res -> responce (서버가 클라이언트에 응답)
const handleHome = (req, res) => {
    console.log(req);
    res.send('Hello from home');
}

const handleProfile = (req, res) => {
    res.send('You are on my profile');
}


// 루트에 접속했을 경우
app.get('/', handleHome);

app.get('/profile', handleProfile);

app.listen(PORT, handleListening);
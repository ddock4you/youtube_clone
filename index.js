import express from 'express';
import { runInNewContext } from 'vm';
const app = express();

const PORT = 4000;

const handleListening = () => {
    console.log(`Listening http://localhost:${PORT}`);
}

const handleHome = (req, res) => {
    console.log(req);
    res.send('Home');
}

const handleProfile = (req, res) => {
    res.send('Profile');
}

const betweenHome = (req, res, next) => {
    console.log('between');
    next();
}

app.get('/', betweenHome, handleHome);
app.get('/profile', handleProfile);

app.listen(PORT, handleListening);
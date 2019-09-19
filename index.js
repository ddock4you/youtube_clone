import express from 'express';
import morgan from 'morgan';
import helmet from 'helmet';
import cookieParser from 'cookie-parser';
import bodyParser from 'body-parser'

const app = express();

const PORT = 4000;

const handleListening = () => {
    console.log(`Listening http://localhost:${PORT}`);
}

const handleHome = (req, res) => res.send('Home');
const handleAbout = (req, res) => res.send('About-us');
const handleContact = (req, res) => res.send('Contact');

const middleware = (req, res, next) => {
    console.log("I'm middleware");
    next();
}

const protect = (req, res) => res.redirect('/');

app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(helmet());
app.use(morgan('dev'));

app.use(middleware);

app.get('/', handleHome);
app.get('/about-us', handleAbout);
app.get('/contact', handleContact);
app.get('/protected', protect);

app.listen(PORT, handleListening);
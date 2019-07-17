import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

mongoose.connect(
    process.env.MONGO_URL,
    {
        useNewUrlParser: true,
        useFindAndModify: false
    }
);

const db = mongoose.connection;

const handleOpen = () => console.log('Connected to DB');
const handleError = error => console.log(`Error on DB:${error}`);


db.once('open', handleOpen);
db.on('error', handleError);

// export const videos = [
//     {
//         id:324393,
//         title: 'video awesome',
//         description: 'This is something I love',
//         views: 24,
//         videoFile: 'https://storage.googleapis.com/webfundamentals-assets/videos/chrome.mp4',
//         creater: {
//             id: 121212,
//             name: 'nocolas',
//             email: 'noci@las.com',

//         }
//     },
//     {
//         id:31234,
//         title: 'video 123',
//         description: 'This is something I lo2323ve',
//         views: 24,
//         videoFile: 'https://storage.googleapis.com/webfundamentals-assets/videos/chrome.mp4',
//         creater: {
//             id: 1245212,
//             name: 'nocolas',
//             email: 'noci@las.com',

//         }
//     },
//     {
//         id:324393,
//         title: 'asdfas',
//         description: 'This is something I love',
//         views: 24,
//         videoFile: 'https://storage.googleapis.com/webfundamentals-assets/videos/chrome.mp4',
//         creater: {
//             id: 'aasdf',
//             name: 'nocolas',
//             email: 'noci@las.com',

//         }
//     },{
//         id:64564393,
//         title: 'vxxxxxxe',
//         description: 'zxcvncvbnve',
//         views: 24,
//         videoFile: 'https://storage.googleapis.com/webfundamentals-assets/videos/chrome.mp4',
//         creater: {
//             id: 121212,
//             name: 'nocolas',
//             email: 'noci@las.com',

//         }
//     }
// ]
import dotenv from "dotenv";
import "./db";
import app from './app';
import "./models/Video.js";
import "./models/Comment.js";
dotenv.config();




const PORT = process.env.PORT || 4000;



const handleListening = () => {
    console.log(`Listening http://localhost:${PORT}`);
}

app.listen(PORT, handleListening);
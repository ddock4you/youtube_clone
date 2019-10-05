import app from './app';
import "./db";
import dotenv from "dotenv";
import "./models/Video.js";
dotenv.config();




const PORT = process.env.PORT || 4000;



const handleListening = () => {
    console.log(`Listening http://localhost:${PORT}`);
}

app.listen(PORT, handleListening);
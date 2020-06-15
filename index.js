const express = require("express");
const app = express();

const PORT = 4000;

const handleListening = () => {
    console.log(`Listening on: http://localhost:${PORT}`);
};

app.listen(PORT, handleListening);

const handleHome = (req, res) => res.send("Hello");

const handleProfile = (req, res) => res.send("Profile");

const betweenHome = (req, res, next) => {
    console.log("Beetween");
    next();
};

app.use(betweenHome); // 순서 중요
app.get("/", handleHome);
app.get("/profile", handleProfile);

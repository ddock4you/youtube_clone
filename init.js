require("./db");
const app = require("./app");
const dotenv = require("dotenv");

dotenv.config();

const handleListening = () => {
    console.log(`Listening on: http://localhost:${process.env.PORT}`);
};

app.listen(process.env.PORT, handleListening);

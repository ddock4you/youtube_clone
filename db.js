import mongoose from "mongoose";

mongoose.connect(
  "mongodb://localhost:27017/we-tube",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true
  }
);

const db = mongoose.connection;

const handleOpen = () => console.log("Connect DB");
const handleError = () => console.log(`Error on DB Connection:${error}`);

db.once("open", handleOpen);
db.on("error", handleError);
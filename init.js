import "./models/Video";
import "./models/Comment";
import "./models/User";
import dotenv from "dotenv";
import "./db";
import app from "./app";

dotenv.config();

const PORT = process.env.PORT || 8888;

const handleListening = () =>
  console.log(`Listening On http://localhost:${PORT}`);

app.listen(PORT, handleListening);

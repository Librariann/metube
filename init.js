import "./db"
import app from "./app";
import dotenv from "dotenv";
dotenv.config();
import "./models/Video";
import "./models/Comment";

const PORT = process.env.PORT || 8888;

const handleListening = () => console.log(`Listening On http://localhost:${PORT}`);

app.listen(PORT, handleListening); 
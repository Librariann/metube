import app from "./app";

const PORT = 8888;

const handleListening = () => console.log(`Listening On http://localhosr:${PORT}`);

app.listen(PORT, handleListening); 
import express from "express";
import fetch from "node-fetch";
import cors from "cors";

const app = express();
app.use(cors());
app.use(express.json());

const ELEVEN_API_KEY = process.env.ELEVEN_API_KEY;

app.post("/tts", async (req, res) => {
  const { text, voice } = req.body;

  const response = await fetch("https://api.elevenlabs.io/v1/text-to-speech/" + voice, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "xi-api-key": ELEVEN_API_KEY
    },
    body: JSON.stringify({ text })
  });

  const audioBuffer = await response.arrayBuffer();
  res.set("Content-Type", "audio/mpeg");
  res.send(Buffer.from(audioBuffer));
});

app.listen(3000, () => console.log("Server running on port 3000"));

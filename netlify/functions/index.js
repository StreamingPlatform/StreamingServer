import express from "express";
import serverless from "serverless-http";
import { getEmbedSu } from "../src/extractors/embedsu.js";

const app = express();
app.use(express.json());

app.get("/", (req, res) => {
  res.status(200).json({
    intro: "Welcome to the Official Streaming Server API",
    providers: { embedsu: "/embedsu/" },
    author: "This API is developed and created by StreamingPlatform",
  });
});

app.get("/embedsu/movie/:tmdbId", async (req, res) => {
  try {
    const vidsrcresponse = await getEmbedSu(req.params.tmdbId);
    res.status(200).json(vidsrcresponse);
  } catch (error) {
    console.error("Error fetching movie data:", error);
    res.status(500).json({ error: "Failed to fetch movie data" });
  }
});

app.get("/embedsu/tv/:tmdbId/:season/:episode", async (req, res) => {
  try {
    const vidsrcresponse = await getEmbedSu(req.params.tmdbId, req.params.season, req.params.episode);
    res.status(200).json(vidsrcresponse);
  } catch (error) {
    console.error("Error fetching TV show data:", error);
    res.status(500).json({ error: "Failed to fetch TV show data" });
  }
});

// Export the app for Netlify
export const handler = serverless(app);

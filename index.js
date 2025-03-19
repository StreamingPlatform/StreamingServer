import express from "express";
import { getEmbedSu } from "./src/extractors/embedsu.js";

const port = 3000;
const app = express();

// Middleware (if needed)
app.use(express.json());

app.get("/", (req, res) => {
    res.status(200).json({
        intro: "Welcome to the Official Streaming Server API",
        providers: {
            embedsu: "/embedsu/"
        },
        author: "This API is developed and created by StreamingPlatform"
    });
});

app.get("/embedsu", (req, res) => {
    res.status(200).json({
        intro: "Embed.SU Server API",
        routes: {
            movie: "/embedsu/movie/{tmdb_id}",
            tv: "/embedsu/tv/{tmdb_id}/{season_number}/{episode_number}"
        },
        author: "This API is developed and created by StreamingPlatform"
    });
});

// Route for movies
app.get("/embedsu/movie/:tmdbId", async (req, res) => {
    const id = req.params.tmdbId;
    
    try {
        const vidsrcresponse = await getEmbedSu(id);
        res.status(200).json(vidsrcresponse);
    } catch (error) {
        console.error("Error fetching movie data:", error);
        res.status(500).json({ error: "Failed to fetch movie data" });
    }
});

// Route for TV shows
app.get("/embedsu/tv/:tmdbId/:season/:episode", async (req, res) => {
    const { tmdbId, season, episode } = req.params;

    try {
        const vidsrcresponse = await getEmbedSu(tmdbId, season, episode);
        res.status(200).json(vidsrcresponse);
    } catch (error) {
        console.error("Error fetching TV show data:", error);
        res.status(500).json({ error: "Failed to fetch TV show data" });
    }
});

app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});

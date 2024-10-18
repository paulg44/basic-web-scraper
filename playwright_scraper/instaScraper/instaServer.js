import express from "express";
import cors from "cors";
import fs from "fs-extra";

const app = express();
app.use(cors());

app.get("/instagramData", async (req, res) => {
  try {
    const instagramScrapedData = await fs.readFile("instagram.json", "utf-8");
    res.json(JSON.parse(instagramScrapedData));
  } catch (error) {
    console.error("Error reading instagram json file", error);
    res
      .status(500)
      .json({ error: "Failed to load scraped data from instagram" });
  }
});

app.listen(3010, () => {
  console.log("Instagram server running on port 3010");
});

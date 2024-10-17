import express from "express";
import cors from "cors";
import fs from "fs-extra";

const app = express();
app.use(cors());

app.get("/scrapedData", async (req, res) => {
  try {
    const scrapedData = await fs.readFile("easySite.json", "utf-8");
    res.json(JSON.parse(scrapedData));
  } catch (error) {
    console.error("Error reading json file:", error);
    res.status(500).json({ error: "Failed to load scraped data" });
  }
});

app.listen(3011, () => {
  console.log("server running on port 3011");
});

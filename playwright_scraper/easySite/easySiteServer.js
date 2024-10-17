import express from "express";
import cors from "cors";
import fs from "fs-extra";

const app = express();
app.use(cors());

app.get("/scrapedData", (req, res) => {
  const scrapedData = fs.readFile("easySite.json");
  res.json(JSON.parse(scrapedData));
});

app.listen(3011, () => {
  console.log("server running on port 3011");
});

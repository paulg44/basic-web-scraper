import express from "express";
import fs from "fs-extra";
import cors from "cors";

const app = express();
app.use(cors());

app.get("/data", (req, res) => {
  const data = fs.readFileSync("cleaned.fixtures.json");
  res.json(JSON.parse(data));
});

app.listen(3050, () => {
  console.log("Server running on 3050");
});

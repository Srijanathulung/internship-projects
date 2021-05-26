import express from "express";
import data from "./data.json";
import cors from "cors";

const app = express();
app.use(cors());

app.get("/api/meals", (req, res) => {
  res.send(data.meals);
});

app.listen(5000, () => {
  console.log("server started at http://localhost:5000");
});

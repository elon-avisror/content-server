const fs = require("fs");
const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.json(JSON.parse(fs.readFileSync("content.json").toString()));
});

app.listen(8000, () => {
  console.log("server listen on port 8000!");
});

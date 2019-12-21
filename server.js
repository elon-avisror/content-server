const fs = require("fs");
const express = require("express");
const { fileName } = require("./config.json");

const app = express();

app.get("/", (req, res) => {
  res.json(JSON.parse(fs.readFileSync(fileName).toString()));
});

app.listen(8000, () => {
  console.log("server listen on port 8000!");
});

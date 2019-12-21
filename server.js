const fs = require("fs");
const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.send("Hello there!");
  //res.json(fs.read("content.json"));
});

app.listen(8000, () => {
  console.log("server listen on port 80!");
});

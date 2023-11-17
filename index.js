const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.send("This is my express app");
});

app.get("/me", (req, res) => {
  res.send("Hi I am Laith");
});

app.listen(6000, () => {
  console.log("backend listening");
});

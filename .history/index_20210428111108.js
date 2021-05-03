const express = require("express");
const router = express.Router();

app.post("/", (req, res) => {
  res.json("Hello word my friends");
});

app.listen(3000);

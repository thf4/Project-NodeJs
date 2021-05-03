const express = require("express");
const app = express();

app.post("/", (req, res) => {
  res.json("Hello word my friends");
});

app.listen(3000);

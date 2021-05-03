const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.json("Hello word my friends");
});

app.listen(3000);

const express = require("express");
const router = express.Router();

router.post("/", (req, res) => {
  res.send("Hello word my friends");
});


module.exports = router;

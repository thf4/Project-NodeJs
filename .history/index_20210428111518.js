const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.send("Hello word my friends");
});


module.exports = router;

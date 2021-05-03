const express = require("express");
const { timeLog } = require("node:console");
const router = express.Router();


router.use( function timeLog (req, res, next)  {
  console.log('Time: ', Date.now())
  next();

});
router.get("/", (req, res) => {
  res.send("Hello word my friends");
});


module.exports = router;

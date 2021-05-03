const express = require("express");
const router = express.Router();


router.use( function timeLog (req, res, next)  {
  console.log('Time: ', Date.now())
  next();

});
router.get("/", (req, res) => {
  res.send("Hello word my friends");
});

module.exports = app => app.use('/', router)

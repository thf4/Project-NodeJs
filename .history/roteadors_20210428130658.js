const express = require("express");
const router = express.Router();
const requestTime = (req, res, next) =>{
  req.requestTime = Date.now()
  next();
}

router.use(requestTime)

router.get('/',  (req, res) => {
  res.send("Hello there")
});


module.exports = app => app.use('/', router)

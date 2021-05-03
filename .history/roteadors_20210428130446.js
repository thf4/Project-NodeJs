const express = require("express");
const router = express.Router();
const myLogger = (req, res, next) =>{
  alert('Logged')
  next();
}

router.use(myLogger)

router.get('/',  (req, res) => {
  res.send("Hello there")
});


module.exports = app => app.use('/', router)

const express = require("express");
const router = express.Router();
const requestTime = (req, res, next) =>{
  req.requestTime = Date.now()
  next();
}

router.use(requestTime)

router.get('/',  (req, res) => {
  const responseText = 'hello word';
  responseText += 'Requested at: ' + req.requestTime + '';
  res.send(responseText)
});


module.exports = app => app.use('/', router)

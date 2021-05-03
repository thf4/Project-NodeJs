const express = require("express");
const router = express.Router();
const requestTime = (req, res, next) =>{
  req.requestTime = Date.now()
  next();
}

router.use(requestTime)

router.get('/user/:id',  (req, res, next) => {
  console.log("ID", req.params.id)

},(req,res, next)=>{
res.send("User Info");
next();
});


module.exports = app => app.use('/', router)

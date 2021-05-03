const express = require("express");
const router = express.Router();



router.get('/user/:id',  (req, res, next) => {
  console.log("ID", req.params.id)

},(req,res, next)=>{
res.send("User Info");
next();
});


module.exports = app => app.use('/', router)

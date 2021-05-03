const express = require("express");
const router = express.Router();
const Kit = require('./server')


router.get('/', async (req, res, ) => {
  try{
    const kit = await Kit.create
  }catch(err){
      console.log(err)
  }
});


module.exports = app => app.use('/', router)

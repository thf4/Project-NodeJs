const express = require("express")
const router = express.Router();
const mongoose = require("mongoose");
const Users = require("../Models/usuario")

router.get("/registro", (req,res) =>{
  res.render("usuarios/registro")
})



module.exports = (app) => app.use("/", router);
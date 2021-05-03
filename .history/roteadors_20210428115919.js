const express = require("express");
const router = express.Router();


router.get('/', function (req, res) {
  res.render('index', { title: 'Hey', message: 'Hello there!'});
});

router.post('/', (req, res) =>{
  res.status(400).send("Eita porraaaaa, olha o macacoooooo")
})

module.exports = app => app.use('/', router)

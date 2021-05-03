const express = require("express");
const router = express.Router();


router(authMiddleware)

router.get("/", (req, res) => {
  res.send("Hello word my friends");
});

router.post('/', (req, res) =>{
  res.status(400).send("Eita porraaaaa, olha o macacoooooo")
})

module.exports = app => app.use('/', router)

const express = require("express");
const router = express.Router();
const Kit = require("./server");

router.post("/users", async (req, res) => {
  try {
    const kit = await Kit.create({
      name,
      title,
      subtitle,
      user: req.userId
    });

    return res.send({ kit });
  } catch (err) {
    console.log(err);
  }
});

module.exports = (app) => app.use("/", router);

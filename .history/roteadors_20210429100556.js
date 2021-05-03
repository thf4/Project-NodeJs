const express = require("express");
const router = express.Router();
const Kit = require("./server");

router.get("/", async (req, res) => {
  try {
    const { title, subtitle } = req.body;
    const kit = await Kit.create({
      title,
      subtitle,
      user: req.userId
    });
    await kit.save()

    return res.send({ kit });
  } catch (err) {
    console.log(err);
  }
});

module.exports = (app) => app.use("/", router);

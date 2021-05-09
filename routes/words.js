const express = require("express");
const router = express.Router();

//Model
const Bot = require("../models/BotList");

router.get("/all", (_, res) => {
  const promise = Bot.find({});
  promise.then((data) => res.json(data)).catch((err) => res.json(err));
});

router.get("/all/:id", (req, res, _) => {
  const promise = Bot.findById(req.params.id);
  promise
    .then((data) => {
      res.json(data);
    })
    .catch((err) => res.json(err));
});

router.post("/new", (req, res) => {
  const bot = new Bot(req.body);
  const promise = bot.save();
  promise
    .then((data) => {
      res.json(data);
    })
    .catch((err) => res.json(err));
});

module.exports = router;

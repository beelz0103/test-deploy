const { retry } = require("async");
var express = require("express");
var router = express.Router();
const messages_controller = require("../controllers/messagesController");
const messages = messages_controller.messages;

router.get("/", async function (req, res) {
  res.render("index", { messages });
});

module.exports = router;

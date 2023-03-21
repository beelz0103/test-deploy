const { retry } = require("async");
var express = require("express");
var router = express.Router();
const messages_controller = require("../controllers/messagesController");
const messages = messages_controller.messages;
const Message = require("../models/messages_mdl");

// router.get("/", async function (req, res) {
//   res.render("index", { messages });
// });

const getMessages = async () => {
  return await Message.find({}, "message_text author_name creation_date");
};

router.get("/", async function (req, res) {
  const messages = await getMessages();
  res.render("index", { messages });
});

module.exports = router;

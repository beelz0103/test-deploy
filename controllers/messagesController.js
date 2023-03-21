const Message = require("../models/messages_mdl");

const messages = [];

async function messageCreate(
  message_text,
  author_name,
  creation_date = new Date()
) {
  const message = new Message({ message_text, author_name, creation_date });
  messages.push(message);
  console.log(`Added message: ${message_text}`);
}

// Display Message create form on GET.
message_create_get = (req, res) => {
  res.render("form");
};

// Handle Message create on POST.
message_create_post = (req, res, next) => {
  messageCreate(req.body.message, req.body.author);
  res.redirect("/");
};

module.exports = { messages, message_create_get, message_create_post };

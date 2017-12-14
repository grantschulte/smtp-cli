const {
  validEmail,
  validString
} = require("./validators");

const questions = [{
  type: "input",
  name: "name",
  message: "Who do you want to email?",
  validate: function(input) {
    return validString(input) || "The name must be a string.";
  }
}, {
  type: "input",
  name: "email",
  message: "What is the recipient's email?",
  validate: function(input) {
    return validEmail(input) || "Please provide a valid email.";
  }
}, {
  type: "input",
  name: "subject",
  message: "What is the subject?",
  validate: function(input) {
    return validString(input) || "The subject must be a string.";
  }
}, {
  type: "input",
  name: "message",
  message: "Say something...",
  validate: function(input) {
    return validString(input) || "The message must be a string.";
  }
}];

module.exports = questions;

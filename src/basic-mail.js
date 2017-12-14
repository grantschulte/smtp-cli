#!/usr/bin/env node

const dotenv = require("dotenv").load();
const prompt = require("inquirer").prompt;
const nodemailer = require("nodemailer");

const questions = require("./questions");
const send = require("./send");

prompt(questions).then(answers => {
  send(answers);
});

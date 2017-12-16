#!/usr/bin/env node

const program = require("commander");
const prompt = require("inquirer").prompt;
const questions = require("./questions");
const send = require("./send");
const config = require("./config");

program
  .version(config.version)
  .description(config.description)
  .usage("<host> <user> <pass> [options]");

program
  .arguments("<host> <user> <pass>")
  .option("-p, --port [port]", "Set smtp port", parseInt)
  .action((host, user, pass, options) => {
    const server = {
      host,
      user,
      pass,
      port: options.port || 587
    };

    prompt(questions).then(answers => {
      send(server, answers);
    });
  });

program.parse(process.argv);

if (!process.argv.slice(2).length || !/[arudl]/.test(process.argv.slice(2))) {
  program.help();
  process.exit();
}

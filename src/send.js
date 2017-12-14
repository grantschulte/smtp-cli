const nodemailer = require("nodemailer");
const fs = require("fs");
const config = require("./config");

function send(answers) {
  const {
    name,
    email,
    subject,
    message
  } = answers;

  let transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: process.env.SMTP_PORT,
    secure: false,
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS
    }
  });

  let opts = {
    from: `"Jean-Luc Picard" <picard@example.com>`,
    to: `"${name}" <${email}>`,
    subject,
    text: mailText(answers),
    html: mailHtml(answers)
  };

  transporter.sendMail(opts, (err, info) => {
    if (err) {
      console.error(err);
      return process.exit(1);
    }

    console.log("Message sent: %s", info.messageId);
    console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
  });
}

function mailText({ name, message }) {
  return `Hello ${name}. ${message}\nBest,\nJean-Luc Picard`;
}

function mailHtml({ name, message }) {
  return `
    <h1>Hello ${name},</h1>
    <p>${message}</p>
    <p>Best,<br/>Jean-Luc Picard</p>
  `;
}

module.exports = send;

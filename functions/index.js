/* eslint-disable */
"use strict";

const functions = require("firebase-functions");
const nodemailer = require("nodemailer");
const cors = require("cors")({ origin: true });

const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 465,
  secure: true,
  auth: {
    user: "guilherme.trb19@gmail.com",
    pass: "#@!52585951"
  }
});

exports.enviarEmail = functions.https.onRequest((req, res) => {
  cors(req, res, () => {
    nodemailer.createTestAccount((err, account) => {
      const htmlEmail = `
                <h3>Contact Details</h3>
                <ul>
                  <li>Name: ${req.body.name}</li>
                  <li>Email: ${req.body.email}</li>
                </ul>
                <h3>Message</h3>
                <p>${req.body.message}</p>
              `;

      let mailOptions = {
        from: "guilherme.trb19@gmail.com",
        to: "igui.trb20@outlook.com",
        subject: "New Message  ✔",
        text: req.body.message,
        html: htmlEmail
      };

      transporter.verify(function(error, success) {
        if (error) {
          console.log(error);
        } else {
          console.log("Server is ready to take our messages");
        }
      });

      transporter.sendMail(mailOptions, (err, info) => {
        if (err) {
          return console.log(err);
        } else {
          transporter.close();
        }

        console.log("Message Sent: %s", info.message);
        console.log("Message URL: %s", nodemailer.getTestMessageUrl(info));

        transporter.close();
      });
    });
  });
});

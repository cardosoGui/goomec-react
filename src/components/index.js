/* eslint-disable */
"use strict";

const functions = require("firebase-functions");
const nodemailer = require("nodemailer");
const cors = require("cors")({ origin: true });

const transporter = nodemailer.createTransport({
  host: "smtp.mailgun.org",
  port: 465,
  secure: true,

  auth: {
    user: "guilherme@goomec.com.br",
    pass: "@Gui2018"
  }
});

exports.enviarEmail = functions.https.onRequest((req, res) => {
  cors(req, res, () => {
    nodemailer.createTestAccount((err, account) => {
      const htmlEmail = `
     
                <h3>Detalhes do Contato</h3>
                <ul>
                  <li>Nome: ${req.body.name}</li>
                  <li>Email: ${req.body.email}</li>
                </ul>
                <h3>Lista de desejos:</h3>
                <h4>${req.body.checkbox}</h4>
                <h3>Messagem</h3>
                <p>${req.body.message}</p>
              `;

      let mailOptions = {
        from: "goomec.plataforma.automotiva@gmail.com",
        to:
          "goomec.plataforma.automotiva@gmail.com, guilherme@goomec.com.br, reginaldo@gmail.com.br",
        subject: "Cliente do Site GooMec",
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
          res.send("fail");
          return console.log(err);
        } else {
          res.send("success");

          transporter.close();
          return console.log(info);
        }

        console.log("Message Sent: %s", info.message);
        console.log("Message URL: %s", nodemailer.getTestMessageUrl(info));

        transporter.close();
      });
    });
  });
});

//emails enviados ao cliente
exports.clientesEmail = functions.https.onRequest((req, res) => {
  cors(req, res, () => {
    nodemailer.createTestAccount((err, account) => {
      const htmlEmail = `
      <img src="https://www.google-analytics.com/collect?v=1&tid=UA-126128355-1&cid=555&t=event&ec=email&ea=open&dp=%2Femail%2Fvendas1&dt=My%20EmailMarketing"
      />
      
      <head>
          <style>
              @import url("https://fonts.googleapis.com/css?family=Roboto|Anton");
      
              .container-text-title {
                  text-align: center;
                  letter-spacing: 0.2em;
              }
      
              .container-text-content {
                  text-align: justify;
                  letter-spacing: 0.1em;
                  padding: 0em 5em;
              }
      
              .font {
                  font-family: "Anton", sans-serif;
                  line-height: 3em;
              }
      
              .div-full {
                  border-radius: 1em;
                  margin-left: 20%;
                  width: 800px;
              }
      
              .row {
                  display: flex;
                  justify-content: left;
                  text-align: justify;
              }
      
              .col {
                  display: flex;
                  justify-content: center;
                  text-align: center;
                  padding: 0em 10em;
              }
      
              .footer {
                  padding: 1em 3em;
                  height: 8em;
              }
          </style>
      </head>
      <div class="font div-full">
          <div>
              <div style="padding-left:25%;">
                  <img src="https://firebasestorage.googleapis.com/v0/b/goomec-cdaf3.appspot.com/o/goomec-logo-big-goomec.png?alt=media&token=b133a831-0898-4133-8ade-e14029b057cc"
                      alt="Logo goomec" />
              </div>
              <br>
              <h1 class="container-text-title">Bem vindo a Goomec</h1>
              <h2 class="container-text-content">Monte sua oficina com Tecnologia de ponta 100% nacional.
                  <br> Parcele sua compras usando o cartão BNDES, aumente sua produtividade. Conheça a nossa linha de ferramentas de
                  Alinhamento, Balanceamento, Desmontadoras e muito mais, clique
                  <a href="https://goomec.com.br">Aqui</a> e acesse nosso site.</h2>
              <br>
          </div>
          <div>
              <img style=" border-radius: 1em " src="https://firebasestorage.googleapis.com/v0/b/goomec-cdaf3.appspot.com/o/image%201.jpg?alt=media&token=7b93e071-6ee8-4126-a921-c8d5bdbd0435"
                  alt="alinhador " height="600px " />
          </div>
          <br>
          <div style="padding-left:25%">
              <img style="border-radius: 1em " src="https://firebasestorage.googleapis.com/v0/b/goomec-cdaf3.appspot.com/o/image%202.jpg?alt=media&token=ecd019c1-0ad5-4780-b705-eed8f6c767fc"
                  alt="alinhador " height="600px " />
          </div>
          <br>
          <div>
              <img style=" border-radius: 1em " src="https://firebasestorage.googleapis.com/v0/b/goomec-cdaf3.appspot.com/o/rampa_pantografica.jpg?alt=media&token=4907d2c2-69e7-4c6d-9224-d29d01907796"
                  alt="alinhador " height="600px " />
          </div>
          <div class="col ">
              <h3>Não deixe de conferir as novidades! acesse nosso site
                  <a href="https://goomec.com.br ">www.goomec.com.br</a>
              </h3>
          </div>
          <div class="footer container-text-content ">
              <div class="col ">
                  <h2>Telefone: (11) 9 5787-7709 &nbsp;
                      <span style=" width: 5em ">
                          <img src="https://firebasestorage.googleapis.com/v0/b/goomec-cdaf3.appspot.com/o/whatsapp-brands.svg?alt=media&token=bca2abac-fc09-4409-aa53-a77f8f53c217"
                              alt="whatsapp"  width="50px" />
                      </span>
                  </h2>
      
              </div>
          </div>
      </div>
              `;

      let mailOptions = {
        from: "vendas@goomec.com.br",
        to: `${req.body.email}`,
        subject: "GOOMEC | Sua Plataforma de Produtos Automotivos",
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
          res.send("fail");
          return console.log(err);
        } else {
          res.send("success");

          transporter.close();
          return console.log(info);
        }

        console.log("Message Sent: %s", info.message);
        console.log("Message URL: %s", nodemailer.getTestMessageUrl(info));

        transporter.close();
      });
    });
  });
});

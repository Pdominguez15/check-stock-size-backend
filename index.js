require("dotenv").config();
const express = require("express");
const bodyParser = require("body-parser");
const nodemailer = require("nodemailer");

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

const route = express.Router();
const port = 5000;

app.use("/v1", route);

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});

const transporter = nodemailer.createTransport({
  port: 465,
  host: "smtp.gmail.com",
  auth: {
    user: process.env.CHECK_STOCK_EMAIL,
    pass: process.env.CHECK_STOCK_PASSWORD,
  },
  secure: true,
});

route.post("/sendMail", (req, res) => {
  const { email, product } = req.body;

  if (!email || !product) {
    return res
      .status(400)
      .json({ error: "Email and product are required fields." });
  }

  const mailData = {
    from: process.env.CHECK_STOCK_EMAIL,
    to: email,
    subject: "Entrada en stock del producto: " + product,
    html:
      "<b>Hola! </b><br> El producto " +
      product +
      " que tienes en seguimiento ha entrado en stock.<br/>",
  };

  transporter.sendMail(mailData, (error, info) => {
    if (error) {
      return console.log(error);
    }
    res.status(200).send({ message: "Mail send", message_id: info.messageId });
  });
});

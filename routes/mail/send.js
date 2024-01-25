import nodemailer from "nodemailer";
import template from "../../helpers/mailTemplate.js";

import dotenv from "dotenv";
dotenv.config();

const transporter = nodemailer.createTransport({
  port: 465,
  host: "smtp.gmail.com",
  auth: {
    user: process.env.CHECK_STOCK_EMAIL,
    pass: process.env.CHECK_STOCK_PASSWORD,
  },
  secure: true,
});

const sendMail = (req, res) => {
  const { email, name, size, url } = req.body;

  if (!email || !name || !size || !url) {
    return res.status(400).json({ error: "There are missing fields." });
  }

  const mailData = {
    from: process.env.CHECK_STOCK_EMAIL,
    to: email,
    subject: "Entrada en stock del producto " + name + " . Talla: " + size,
    html: template
      .replace("<%= name %>", name)
      .replace("<%= size %>", size)
      .replace("<%= url %>", url),
  };

  transporter.sendMail(mailData, (error, info) => {
    if (error) {
      return console.log(error);
    }
    res.status(200).send({ message: "Mail send", message_id: info.messageId });
  });
};
export default sendMail;

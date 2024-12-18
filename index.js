import express from "express";
import bodyParser from "body-parser";

// Routes
import sendMail from "./routes/mail/send.js";
import sendMessageToTelegramBot from "./routes/telegram/send.js";
import productInfo from "./routes/product/info.js";

import dotenv from "dotenv";
dotenv.config();

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

const route = express.Router();
const port = 5001;

app.use("/v1", route);

route.post("/mail", sendMail);
route.post("/telegram", sendMessageToTelegramBot);
route.post("/productInfo", productInfo);

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});

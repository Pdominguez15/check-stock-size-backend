import express from "express";
import bodyParser from "body-parser";

// Routes
import sendMail from "./routes/mail/send.js";
import productInfo from "./routes/product/info.js";

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

const route = express.Router();
const port = 5001;

app.use("/v1", route);

route.post("/mail", sendMail);
route.post("/productInfo", productInfo);

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});

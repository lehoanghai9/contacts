import express, { Application } from "express";

import contactRouter from "./routes/contact.router";
import bodyParser from "body-parser";
import cors from "cors"

const app: Application = express();
const port = process.env.PORT || 8080;

/* app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true })); */
app.use(express.static('public'));
app.use(cors());

app.use("/contacts", contactRouter);

app.listen(port, () => {
  console.log(`Server running on port: ${port}`);
});

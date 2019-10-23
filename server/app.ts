import * as express from "express";
import * as bodyParser from "body-parser";
import * as config from "./config";
import * as morgan from "morgan";
import { router as apiRoutes } from "./routes";
import { cors } from "./middleware/cors";

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));

app.use(bodyParser.json({ limit: "5mb" }));

app.use(cors);

if (config.ENV === "development") {
  app.use(morgan("dev"));
}
app.use("/api", apiRoutes);

module.exports = app;

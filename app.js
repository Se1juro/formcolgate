require("dotenv").config({ path: "./.env" });
const cookieParser = require("cookie-parser");
const morgan = require("morgan");
const express = require("express");
const app = express();
const cors = require("cors");
app.use(cookieParser());
const corsOptions = {
  //process.env.CLIENT_URI, 'http://localhost:3000',
  origin: [
    process.env.CLIENT_URI,
    "http://localhost:3000",
    "http://192.168.1.24:3000",
    "http://192.168.1.52:3000",
  ],
  credentials: true,
};

app.use(cors(corsOptions));
app.options("*", cors()); // include before other routes
const routes = require("./routes/routes");
const { error404Handler, errorHandler } = require("./middlewares");
require("mongoose");
require("./database/index");

app.set("trust proxy", true);

app.use(express.json({ limit: "10mb", extended: true }));
app.use(express.urlencoded({ extended: true, limit: "10mb" }));
app.use(morgan(process.env.LOGGER));

app.use("/api", routes);
app.use(error404Handler);
app.use(errorHandler);

app.disable("x-powered-by");

module.exports = app;

require('simple-console-colors')();
const express = require("express");
const routes = require("./routes");
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

if (process.env.NODE_ENV === "production") 
  app.use(express.static("client/build"));

app.use(routes);

module.exports = app;
const express = require("express");
const routes = require("./routes");
const server = express();
const PORT = process.env.PORT || 3001;
const mongooseConnect = require("./dbconfig/connection.js");

server.use(express.urlencoded({ extended: true }));
server.use(express.json());

if (process.env.NODE_ENV === "production") 
  server.use(express.static("client/build"));

server.use(routes);

server.listen(PORT, () => {
  console.log(`Server running on PORT ${PORT}!`);
  mongooseConnect();
});

const app = require('./app')
const PORT = process.env.PORT || 3001;
const mongooseConnection = require("./dbconfig/connection.js");

app.listen(PORT, () => {
  console.log(`Server running on PORT ${PORT}!`);
  mongooseConnection.connect();
});

const mongooseConnection = require("../dbconfig/connection.js");
const db = require("../models");
( async () => {
await mongooseConnection.connect();
const randomHour = () => 3600000*(Math.random() * (10 - 1) + 1);
const seed = [
  {
    title: "Test 1",
    date: new Date(Date.now() + randomHour)
  },
  {
    title: "Test 2",
    date: new Date(Date.now() + randomHour)
  },
  {
    title: "Test 3",
    date: new Date(Date.now() + randomHour)
  }
];

db.Test
  .deleteMany({})
  .then(() => db.Test.collection.insertMany(seed))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    mongooseConnection.disconnect();
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    mongooseConnection.disconnect();
    process.exit(1);
  });
})();
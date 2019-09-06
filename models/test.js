const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const testSchema = new Schema({
  title: { type: String, required: true },
  date: { type: Date, default: Date.now }
});

const Test = mongoose.model("Test", testSchema);

module.exports = Test;

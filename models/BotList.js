const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const BotSchema = Schema({
  words: {
    type: Array,
    required: [true, "'{PATH}' alani zorunludur!"],
  },
  number: {
    type: Number,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("botModel", BotSchema);

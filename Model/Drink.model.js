const mongoose = require("mongoose");

const drinkSchema = mongoose.Schema({
  name: String,
  price: Number,
  drinkStock: Boolean,
  caffeineContent: Boolean,
  volume: Number,
  descript: String,
});

const Drink = mongoose.model("Drink", drinkSchema);
module.exports = Drink;

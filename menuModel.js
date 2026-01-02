const mongoose = require("mongoose");

const menuSchema = new mongoose.Schema({
  name: { type: String, required: true },
  price: { type: Number, required: true },
  image: String,
  type: {
    type: String,
    enum: ["veg", "nonveg"],
    required: true
  }
});

module.exports = mongoose.model("Menu", menuSchema);

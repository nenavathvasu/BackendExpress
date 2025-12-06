const mongoose = require("mongoose");

const VegSchema = new mongoose.Schema(
  {
    id: { type: Number, required: true, unique: true },
    name: { type: String, required: true, trim: true },
    description: { type: String, required: true, trim: true },
    price: { type: Number, required: true },
    image: { type: String, required: true }
  },
  { timestamps: true } // adds createdAt & updatedAt
);

module.exports = mongoose.model("Veg", VegSchema);

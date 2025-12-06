const mongoose = require("mongoose");

const OrderSchema = new mongoose.Schema({
  customerEmail: { type: String, required: true },
  items: { type: Array, required: true },
  subtotal: Number,
  discountPercent: Number,
  discountedAmount: Number,
  gst: Number,
  finalTotal: Number,
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model("Order", OrderSchema);

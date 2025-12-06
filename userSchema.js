const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: String,
  email: { type: String, unique: true },
  password: String,

  token: { type: String, default: null },
  tokenExpiresAt: { type: Number, default: null }
});

module.exports = mongoose.model("User", userSchema);

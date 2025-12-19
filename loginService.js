require("dotenv").config();
const jwt = require("jsonwebtoken");
const User = require("./userSchema");
const bcrypt = require("bcryptjs");

exports.loginUser = async (email, password) => {
  const user = await User.findOne({ email });
  if (!user) throw new Error("User not found");

  const isMatch = await bcrypt.compare(password, user.password);
  if (!isMatch) throw new Error("Incorrect password");

  if (!process.env.JWT_SECRET)
    throw new Error("JWT_SECRET missing in .env");

  // Token expiry (24 hours)
  const expiresInSeconds = 24 * 60 * 60;
  const tokenExpiresAt = Date.now() + expiresInSeconds * 1000;

  const token = jwt.sign(
    { id: user._id },
    process.env.JWT_SECRET,
    { expiresIn: expiresInSeconds }
  );

  // ❌ DO NOT store token in DB
  // ❌ DO NOT save tokenExpiresAt in DB

  return {
    token,
    tokenExpiresAt,
    user: {
      id: user._id,
      name: user.name,
      email: user.email,
      role: user.role
    }
  };
};

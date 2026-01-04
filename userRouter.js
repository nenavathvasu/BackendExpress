const express = require("express");
const router = express.Router();

const User = require("./userSchema");
const { register } = require("./registerService");
const { login } = require("./loginController");

// Register
router.post("/register", register);

// Login
router.post("/login", login);

// Check email
router.post("/check-email", async (req, res) => {
  const exists = !!(await User.findOne({ email: req.body.email }));
  res.json({ exists });
});

module.exports = router;

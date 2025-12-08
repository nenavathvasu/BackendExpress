const express = require("express");
const router = express.Router();

const User = require("./userSchema");
const { register, login } = require("./registerService");

// Register route
router.post("/register", register);

// Login route
router.post("/login", login);

// Check email
router.post("/check-email", async (req, res) => {
  try {
    const { email } = req.body;
    const exists = !!(await User.findOne({ email }));
    return res.json({ exists });
  } catch (err) {
    return res.status(500).json({ message: "Server error" });
  }
});

module.exports = router;

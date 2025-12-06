const express = require("express");
const router = express.Router();

const registerController = require("./registerController");
const loginController = require("./loginController");
const User = require("./userSchema");

// REGISTER
router.post("/register", registerController.register);

// LOGIN
router.post("/login", loginController.login);

// CHECK EMAIL
router.post("/check-email", async (req, res) => {
  try {
    const { email } = req.body;

    const exists = await User.findOne({ email });

    return res.json({ exists: !!exists });
  } catch (err) {
    res.status(500).json({ message: "Server error" });
  }
});

module.exports = router;

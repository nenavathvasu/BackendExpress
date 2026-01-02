const bcrypt = require("bcryptjs");
const User = require("./userSchema");

exports.register = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    if (!name || !email || !password)
      return res.status(400).json({ message: "All fields required" });

    const exists = await User.findOne({ email });
    if (exists) return res.status(400).json({ message: "Email exists" });

    const hashed = await bcrypt.hash(password, 10);

    const user = await User.create({
      name,
      email,
      password: hashed,
    });

    return res.status(201).json({ message: "Registered", user });

  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};


// TEMP login to avoid crash until you add real logic
exports.login = (req, res) => {
  res.json({ message: "Login working" });
};

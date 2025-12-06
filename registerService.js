const bcrypt = require("bcryptjs");
const User = require("./userSchema");

exports.registerUser = async (name, email, password) => {
  const existing = await User.findOne({ email });
  if (existing) throw new Error("Email already registered");

  const hashed = await bcrypt.hash(password, 10);

  const user = new User({
    name,
    email,
    password: hashed
  });

  await user.save();
  return user;
};

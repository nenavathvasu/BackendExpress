require("dotenv").config();
const jwt = require("jsonwebtoken");
const User = require("./userSchema");

module.exports = async (req, res, next) => {
  // Public API (no token)
  if (req.originalUrl.startsWith("/api/user")) {
    return next();
  }

  const token = req.headers.authorization?.split(" ")[1];
  if (!token)
    return res.status(401).json({ message: "No token provided" });

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    const user = await User.findById(decoded.id);
    if (!user || user.token !== token)
      return res.status(401).json({ message: "Invalid token" });

    if (user.tokenExpiresAt < Date.now())
      return res.status(401).json({ message: "Token expired" });

    req.user = user;
    next();
  } catch (err) {
    return res.status(401).json({ message: "Invalid or expired token" });
  }
};

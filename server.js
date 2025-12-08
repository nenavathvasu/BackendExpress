require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

// Import Routers
const userRoutes = require("./userRouter");
const menuRoutes = require("./menuRouter");
const orderRoutes = require("./orderRouter");
const authMiddleware = require("./authMiddleWare");

const app = express();

// Middlewares
app.use(express.json());
app.use(cors());

// Routes (same style as your example)
app.use("/api/v1/user", userRoutes);
app.use("/api/v1/menu", menuRoutes);
app.use("/api/v1/orders", authMiddleware, orderRoutes);

// Default route
app.get("/", (req, res) => {
  res.json({ status: "OK", message: "Backend running successfully" });
});

// MongoDB Connection
mongoose
  .connect(process.env.MONGO_URL)
  .then(() => console.log("MongoDB Connected"))
  .catch((err) => console.log("MongoDB Error:", err));

// Server Start
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running → http://localhost:${PORT}`);
});

module.exports = app;

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

/* ✅ CORS — MUST BE FIRST */
app.use(
  cors({
    origin: "http://localhost:5173", // frontend
    credentials: true
  })
);

/* Middlewares */
app.use(express.json());

/* Routes */
app.use("/api/v1/user", userRoutes);
app.use("/api/v1/menu", menuRoutes);
app.use("/api/v1/orders", authMiddleware, orderRoutes);

/* Default route */
app.get("/", (req, res) => {
  res.json({ status: "OK", message: "Backend running successfully" });
});

/* MongoDB */
mongoose
  .connect(process.env.MONGO_URL)
  .then(() => console.log("MongoDB Connected"))
  .catch((err) => console.log("MongoDB Error:", err));

/* Server */
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running → http://localhost:${PORT}`);
});

module.exports = app;

require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors"); // ⭐ ADD THIS
const app = express();

const authMiddleware = require("./authMiddleware");
const orderRoutes = require("./orderRouter");
const menuRoutes = require("./menuRouter");
const userRoutes = require("./userRouter");

// ⭐ ENABLE CORS (must be BEFORE routes)
app.use(cors({
  origin: function(origin, callback) {
    if (!origin || allowedOrigins.includes(origin)) {
      callback(null, true);
    } else {
      callback(new Error("Not allowed by CORS"));
    }
  },
  credentials: true,
  methods: ["GET","POST","PUT","PATCH","DELETE","OPTIONS"],
  allowedHeaders: ["Content-Type", "Authorization"]
}));

// Middleware
app.use(express.json());

// ⭐ CONNECT MONGO
mongoose
  .connect(process.env.MONGO_URL)
  .then(() => console.log("✅ MongoDB Connected"))
  .catch((err) => console.error("❌ MongoDB Error:", err.message));

// ⭐ PUBLIC ROUTES (No Token Required)
app.use("/api/user", userRoutes);

// ⭐ PROTECTED ROUTES (Token Required)
app.use(authMiddleware);
app.use("/api/orders", orderRoutes);
app.use("/api/menu", menuRoutes);

// Start server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () =>
  console.log(`🚀 Server running on port ${PORT}`)
);

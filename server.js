require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const userRoutes = require("./userRouter");
const menuRoutes = require("./menuRouter");
const orderRoutes = require("./orderRouter");
const authMiddleware = require("./authMiddleWare");

const app = express();

// ------ ALLOWED ORIGINS ------
const allowedOrigins = [
  process.env.FRONTEND_URL,          // Vercel domain
  "http://localhost:3000",
  "http://127.0.0.1:3000",
  "http://localhost:5173",
  "http://127.0.0.1:5173"
].filter(Boolean);

// ------ CORS CONFIG ------
app.use(
  cors({
    origin: (origin, callback) => {
      if (!origin) return callback(null, true);

      if (allowedOrigins.includes(origin)) {
        callback(null, true);
      } else {
        console.log("❌ BLOCKED ORIGIN:", origin);
        callback(new Error("CORS policy: Not allowed by CORS"));
      }
    },
    credentials: true,
    methods: ["GET", "POST", "PUT", "PATCH", "DELETE", "OPTIONS"],
    allowedHeaders: ["Content-Type", "Authorization"],
  })
);

// ------ BODY PARSER ------
app.use(express.json());

// ------ MONGO CONNECTION ------
mongoose
  .connect(process.env.MONGO_URL)
  .then(() => console.log("✅ MongoDB Connected"))
  .catch((err) => console.error("❌ MongoDB Error:", err.message));

// ------ ROUTES ------
app.use("/api/user", userRoutes);                 // Public
app.use("/api/orders", authMiddleware, orderRoutes); // Protected
app.use("/api/menu", menuRoutes);                 // Public

app.get("/", (req, res) => res.json({ ok: true }));

// ------ SERVER START ------
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));

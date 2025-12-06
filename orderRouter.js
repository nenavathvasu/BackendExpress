const express = require("express");
const { placeOrder, fetchOrders } = require("./OrderController");
const router = express.Router();

// POST /api/orders/placeOrder
router.post("/placeOrder", placeOrder);

// GET /api/orders/fetchOrders
router.get("/fetchOrders", fetchOrders);

module.exports = router;

const express = require("express");
const router = express.Router();
const { placeOrder, fetchOrders } = require("./orderController");

// POST /api/orders/placeorder
router.post("/placeorder", placeOrder);

// GET /api/orders/fetchorders
router.get("/fetchorders", fetchOrders);

module.exports = router;

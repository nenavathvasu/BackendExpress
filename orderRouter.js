const express = require("express");
const router = express.Router();
const Order = require("./orderModel"); // change path if needed

// PLACE ORDER
router.post("/placeorder", async (req, res) => {
  try {
    const order = new Order(req.body);
    await order.save();

    res.status(201).json({
      message: "Order placed successfully",
    });
  } catch (err) {
    res.status(500).json({
      error: err.message,
    });
  }
});

module.exports = router;

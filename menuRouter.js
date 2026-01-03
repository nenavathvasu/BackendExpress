const express = require("express");

const {
  getAllVegItems,
  saveVegItem,
  deleteVegItem,
  getAllNonVegItems,
  saveNonVegItem,
  deleteNonVegItem
} = require("./menuService");

const router = express.Router();

/* ========= VEG ========= */

router.get("/veg", async (req, res) => {
  try {
    const veg = await getAllVegItems();
    res.json(veg);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

router.post("/veg", async (req, res) => {
  try {
    const result = await saveVegItem(req.body);
    res.status(201).json(result);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

router.delete("/veg/:id", async (req, res) => {
  try {
    await deleteVegItem(req.params.id);
    res.json({ message: "Veg item deleted" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

/* ========= NON-VEG ========= */

router.get("/nonveg", async (req, res) => {
  try {
    const nonVeg = await getAllNonVegItems();
    res.json(nonVeg);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

router.post("/nonveg", async (req, res) => {
  try {
    const result = await saveNonVegItem(req.body);
    res.status(201).json(result);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

router.delete("/nonveg/:id", async (req, res) => {
  try {
    await deleteNonVegItem(req.params.id);
    res.json({ message: "Non-veg item deleted" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;

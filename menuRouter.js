const express = require("express");   // ✅ MUST be first line

const {
  getItemsByType,
  saveItem,
  deleteItem
} = require("./menuService");

const router = express.Router();

/* ================= VEG ================= */

// GET ALL VEG
router.get("/veg", async (req, res) => {
  try {
    const veg = await getItemsByType("veg");
    res.json(veg);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// ADD VEG
router.post("/veg", async (req, res) => {
  try {
    const result = await saveItem({ ...req.body, type: "veg" });
    res.status(201).json(result);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// DELETE VEG
router.delete("/veg/:id", async (req, res) => {
  try {
    await deleteItem(req.params.id);
    res.json({ message: "Veg item deleted" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

/* ================= NON-VEG ================= */

// GET ALL NON-VEG
router.get("/nonveg", async (req, res) => {
  try {
    const nonVeg = await getItemsByType("nonveg");
    res.json(nonVeg);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// ADD NON-VEG
router.post("/nonveg", async (req, res) => {
  try {
    const result = await saveItem({ ...req.body, type: "nonveg" });
    res.status(201).json(result);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// DELETE NON-VEG
router.delete("/nonveg/:id", async (req, res) => {
  try {
    await deleteItem(req.params.id);
    res.json({ message: "Non-veg item deleted" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;

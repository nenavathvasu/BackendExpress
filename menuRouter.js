const express = require("express");
const {
  getVegItems,
  saveVegItem,
  deleteVegItem
} = require("./menuService");

const router = express.Router();

// GET ALL VEG
router.get("/veg", async (req, res) => {
  try {
    const veg = await getVegItems();
    res.json(veg);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// ADD VEG
router.post("/veg", async (req, res) => {
  try {
    const result = await saveVegItem(req.body);
    res.status(201).json(result);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// DELETE VEG BY ID
router.delete("/veg/:id", async (req, res) => {
  try {
    await deleteVegItem(Number(req.params.id));
    res.json({ message: "Veg item deleted" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;

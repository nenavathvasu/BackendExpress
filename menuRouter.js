const express = require("express");
const router = express.Router();

const {
  getVegItems,
  saveVegItem,
  deleteVegItem,
  getNonVegItems,
  saveNonVegItem,
  deleteNonVegItem
} = require("./menuService");

// VEG
router.get("/veg", async (req, res) => {
  res.json(await getVegItems());
});

router.post("/veg", async (req, res) => {
  res.status(201).json(await saveVegItem(req.body));
});

router.delete("/veg/:id", async (req, res) => {
  await deleteVegItem(req.params.id);
  res.json({ message: "Veg deleted" });
});

// NON-VEG
router.get("/nonveg", async (req, res) => {
  res.json(await getNonVegItems());
});

router.post("/nonveg", async (req, res) => {
  res.status(201).json(await saveNonVegItem(req.body));
});

router.delete("/nonveg/:id", async (req, res) => {
  await deleteNonVegItem(req.params.id);
  res.json({ message: "Non-veg deleted" });
});

module.exports = router;

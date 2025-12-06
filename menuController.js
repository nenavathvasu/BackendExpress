const {
  saveVegItem,
  getVegItems,
  saveAllVegItems,
  saveAllNonVegItems,
  saveNonVegItem,
  getNonVegItems,
  deleteVegItem,
  deleteNonVegItem,
  deleteAllVegItems,
  deleteAllNonVegItems
} = require("./menuService");

// Save One Veg
const saveVeg = async (req, res) => {
  try {
    const result = await saveVegItem(req.body);
    res.send({ message: "Veg item saved successfully", result });
  } catch (err) {
    res.status(500).send({ message: "Failed to save veg item", error: err.message });
  }
};

// Get All Veg
const getVeg = async (req, res) => {
  try {
    const list = await getVegItems();
    res.send(list);
  } catch (err) {
    res.status(500).send({ message: "Failed to fetch veg items", error: err.message });
  }
};

// Save One Non-Veg
const saveNonVeg = async (req, res) => {
  try {
    const result = await saveNonVegItem(req.body);
    res.send({ message: "Non-Veg item saved successfully", result });
  } catch (err) {
    res.status(500).send({ message: "Failed to save non-veg item", error: err.message });
  }
};

// Get All Non-Veg
const getNonVeg = async (req, res) => {
  try {
    const list = await getNonVegItems();
    res.send(list);
  } catch (err) {
    res.status(500).send({ message: "Failed to fetch non-veg items", error: err.message });
  }
};

// Bulk Save Veg
const saveAllVeg = async (req, res) => {
  try {
    const result = await saveAllVegItems(req.body);
    res.send({ message: "All Veg items saved", result });
  } catch (err) {
    res.status(500).send({ message: "Failed to save all veg items", error: err.message });
  }
};

// Bulk Save Non-Veg
const saveAllNonVeg = async (req, res) => {
  try {
    const result = await saveAllNonVegItems(req.body);
    res.send({ message: "All Non-Veg items saved", result });
  } catch (err) {
    res.status(500).send({ message: "Failed to save all non-veg items", error: err.message });
  }
};

// Delete ONE Veg
const deleteVeg = async (req, res) => {
  try {
    const result = await deleteVegItem(req.params.name);
    res.send({ message: "Veg item deleted", result });
  } catch (err) {
    res.status(500).send({ message: "Failed to delete veg item", error: err.message });
  }
};

// Delete ONE Non-Veg
const deleteNonVeg = async (req, res) => {
  try {
    const result = await deleteNonVegItem(req.params.name);
    res.send({ message: "Non-Veg item deleted", result });
  } catch (err) {
    res.status(500).send({ message: "Failed to delete non-veg item", error: err.message });
  }
};

// Delete ALL Veg
const deleteAllVeg = async (req, res) => {
  try {
    const result = await deleteAllVegItems();
    res.send({ message: "All Veg items deleted", result });
  } catch (err) {
    res.status(500).send({ message: "Failed to delete all veg items", error: err.message });
  }
};

// Delete ALL Non-Veg
const deleteAllNonVeg = async (req, res) => {
  try {
    const result = await deleteAllNonVegItems();
    res.send({ message: "All Non-Veg items deleted", result });
  } catch (err) {
    res.status(500).send({ message: "Failed to delete all non-veg items", error: err.message });
  }
};

module.exports = {
  saveVeg,
  getVeg,
  saveNonVeg,
  getNonVeg,
  saveAllVeg,
  saveAllNonVeg,
  deleteVeg,
  deleteNonVeg,
  deleteAllVeg,
  deleteAllNonVeg
};

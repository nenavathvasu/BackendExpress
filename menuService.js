const Veg = require("./veg");
const NonVeg = require("./NonVeg");

/* =========================
   VEG SERVICES
========================= */

// GET all veg items
const getAllVegItems = async () => {
  return await Veg.find();
};

// ADD veg item
const saveVegItem = async (data) => {
  return await Veg.create(data);
};

// DELETE veg item
const deleteVegItem = async (id) => {
  return await Veg.findByIdAndDelete(id);
};


/* =========================
   NON-VEG SERVICES
========================= */

// GET all non-veg items
const getAllNonVegItems = async () => {
  return await NonVeg.find();
};

// ADD non-veg item
const saveNonVegItem = async (data) => {
  return await NonVeg.create(data);
};

// DELETE non-veg item
const deleteNonVegItem = async (id) => {
  return await NonVeg.findByIdAndDelete(id);
};


/* =========================
   EXPORTS
========================= */

module.exports = {
  // Veg
  getAllVegItems,
  saveVegItem,
  deleteVegItem,

  // Non-Veg
  getAllNonVegItems,
  saveNonVegItem,
  deleteNonVegItem
};

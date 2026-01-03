const Veg = require("./veg");
const NonVeg = require("./NonVeg");

/* ========= VEG ========= */

const getAllVegItems = async () => {
  return await Veg.find();
};

const saveVegItem = async (data) => {
  return await Veg.create(data);
};

const deleteVegItem = async (id) => {
  return await Veg.findByIdAndDelete(id);
};

/* ========= NON-VEG ========= */

const getAllNonVegItems = async () => {
  return await NonVeg.find();
};

const saveNonVegItem = async (data) => {
  return await NonVeg.create(data);
};

const deleteNonVegItem = async (id) => {
  return await NonVeg.findByIdAndDelete(id);
};

module.exports = {
  getAllVegItems,
  saveVegItem,
  deleteVegItem,
  getAllNonVegItems,
  saveNonVegItem,
  deleteNonVegItem
};

const Veg = require("./Veg");
const NonVeg = require("./NonVeg");

// SAVE ONE VEG
const saveVegItem = (data) => new Veg(data).save();

// GET ALL VEG
const getVegItems = () => Veg.find({}, { _id: 0, __v: 0 });

// SAVE ONE NON-VEG
const saveNonVegItem = (data) => new NonVeg(data).save();

// GET ALL NON-VEG
const getNonVegItems = () => NonVeg.find({}, { _id: 0, __v: 0 });

// SAVE MANY VEG
const saveAllVegItems = (items) => Veg.insertMany(items);

// SAVE MANY NON-VEG
const saveAllNonVegItems = (items) => NonVeg.insertMany(items);

// DELETE ONE VEG
const deleteVegItem = (name) => Veg.deleteOne({ name });

// DELETE ONE NON-VEG
const deleteNonVegItem = (name) => NonVeg.deleteOne({ name });

// DELETE ALL VEG
const deleteAllVegItems = () => Veg.deleteMany({});

// DELETE ALL NON-VEG
const deleteAllNonVegItems = () => NonVeg.deleteMany({});

module.exports = {
  saveVegItem,
  getVegItems,
  saveNonVegItem,
  getNonVegItems,
  saveAllVegItems,
  saveAllNonVegItems,
  deleteVegItem,
  deleteNonVegItem,
  deleteAllVegItems,
  deleteAllNonVegItems
};

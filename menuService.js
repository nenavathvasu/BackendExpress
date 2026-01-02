const Veg = require("./Veg");
const NonVeg = require("./NonVeg");

// SAVE ONE VEG
const saveVegItem = (data) => {
  return new Veg({
    id: data.id,
    name: data.name,
    description: data.description,
    price: data.price,
    image: data.image
  }).save();
};

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

// DELETE ONE VEG (by id or name)
const deleteVegItem = (id) => Veg.deleteOne({ id });

// DELETE ALL VEG
const deleteAllVegItems = () => Veg.deleteMany({});

// DELETE ONE NON-VEG
const deleteNonVegItem = (id) => NonVeg.deleteOne({ id });

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

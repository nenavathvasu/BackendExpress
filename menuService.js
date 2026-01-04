const Veg = require("./veg");
const NonVeg = require("./NonVeg");

// Veg
exports.getVegItems = () => Veg.find();
exports.saveVegItem = (data) => Veg.create(data);
exports.deleteVegItem = (id) => Veg.findByIdAndDelete(id);

// Non-Veg
exports.getNonVegItems = () => NonVeg.find();
exports.saveNonVegItem = (data) => NonVeg.create(data);
exports.deleteNonVegItem = (id) => NonVeg.findByIdAndDelete(id);

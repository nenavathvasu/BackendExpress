const Menu = require("./menuModel");

const getItemsByType = async (type) => {
  return await Menu.find({ type });
};

const saveItem = async (data) => {
  return await Menu.create(data);
};

const deleteItem = async (id) => {
  return await Menu.findByIdAndDelete(id);
};

module.exports = {
  getItemsByType,
  saveItem,
  deleteItem
};

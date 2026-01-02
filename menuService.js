
// Get items by type (veg / nonveg)
const getItemsByType = async (type) => {
  return await Menu.find({ type });
};

// Save item
const saveItem = async (data) => {
  return await Menu.create(data);
};

// Delete item
const deleteItem = async (id) => {
  return await Menu.findByIdAndDelete(id);
};

module.exports = {
  getItemsByType,
  saveItem,
  deleteItem
};

const db = require("../models/index");

const getMenu = async (req, res) => {
  try {
    const menuItems = await db.MenuItem.findAll();
    res.json(menuItems);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const addMenu = async (req, res) => {
  const { name, description, price } = req.body;

  try {
    const menuItem = await db.MenuItem.create({ name, description, price });
    res.status(201).json(menuItem);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const updateMenu = async (req, res) => {
  const { id } = req.params;
  const { name, description, price } = req.body;

  try {
    const menuItem = await db.MenuItem.findByPk(id);
    if (!menuItem)
      return res.status(404).json({ message: "Menu item not found." });

    menuItem.name = name;
    menuItem.description = description;
    menuItem.price = price;
    await menuItem.save();

    res.json(menuItem);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
const deleteMenu = async (req, res) => {
  const { id } = req.params;

  try {
    const menuItem = await MenuItem.findByPk(id);
    if (!menuItem)
      return res.status(404).json({ message: "Menu item not found." });

    await menuItem.destroy();
    res.json({ message: "Menu item deleted successfully." });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
module.exports = {
  getMenu,
  addMenu,
  updateMenu,
  deleteMenu,
};

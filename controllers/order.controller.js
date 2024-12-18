const db = require("../models/index");

const newOrder = async (req, res) => {
  const { user_id, items, status } = req.body;

  try {
    const newOrder = await db.Order.create({
      user_id,
      items,
      status: "delivered" || "pending",
    });
    res.status(201).json(newOrder);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
const orderById = async (req, res) => {
  const { id } = req.params;

  try {
    const order = await db.Order.findByPk(id);
    if (!order) {
      return res.status(404).json({ message: "Order not found." });
    }
    res.json(order);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
const getOrders = async (req, res) => {
  console.log("call get order");
  //   const { user_id } = req.query;

  try {
    const orders = await db.Order.findAll({
      where: { user_id: 1 },
    });
    res.json(orders);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
module.exports = {
  newOrder,
  orderById,
  getOrders,
};

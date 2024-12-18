const db = require("../models/index");

const newOrder = async (req, res) => {
  const { user_id, items, status } = req.body;

  try {
    const newOrder = await db.Order.create({
      userId: user_id,
      items,
      status: "pending",
      order_date: new Date(),
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
  //   const { user_id } = req.query;

  try {
    const orders = await db.Order.findAll({
      where: { userId: 1 },
      include: [
        {
          model: db.User,
          as: "user",
        },
      ],
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

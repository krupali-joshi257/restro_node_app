const express = require("express");
const {
  newOrder,
  orderById,
  getOrders,
} = require("../controllers/order.controller");
const router = express.Router();

router.post("/order", newOrder);
router.get("/order/:id", orderById);
router.get("/orders", getOrders);

module.exports = router;

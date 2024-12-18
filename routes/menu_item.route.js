const express = require("express");
const {
  getMenu,
  addMenu,
  updateMenu,
  deleteMenu,
} = require("../controllers/menu_item.controller");
const router = express.Router();

router.get("/menu", getMenu);
router.post("/menu", addMenu);
router.put("/menu/:id", updateMenu);
router.delete("/menu/:id", deleteMenu);

module.exports = router;

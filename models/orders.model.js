const sequelize = require("sequelize");
const db = require("../config/database");
var order = db.define(
  "order",
  {
    order_date: { type: sequelize.DATE, allowNull: false },
    items: { type: sequelize.STRING, unique: true, allowNull: false },
    status: {
      type: sequelize.STRING,
      allowNull: false,
      defaultValue: "pending",
    },
  },
  {
    // dont use createdAt/update
    timestamps: false,
  }
);
module.exports = order;

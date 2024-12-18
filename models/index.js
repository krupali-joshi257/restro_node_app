const sequelize = require("../config/database");
const User = require("./user_model");
const Order = require("./orders.model");
const MenuItem = require("./menu_items.model");

// Define Relationships
User.hasMany(Order, { foreignKey: "userId", as: "orders" });
Order.belongsTo(User, { foreignKey: "userId", as: "user" });

// Sync Models (Optional: For production, use migrations instead)
sequelize
  .sync({ force: false })
  .then(() => console.log("Database & tables created!"))
  .catch((err) => console.error("Error syncing database:", err));

module.exports = { User, Order, MenuItem, sequelize };

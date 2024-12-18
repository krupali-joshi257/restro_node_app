const sequelize = require("sequelize");
const db = require("../config/database");
var menu_items = db.define(
    "menu_items",
    {
        name: { type: sequelize.STRING ,allowNull:false},
        description:{type: sequelize.STRING,unique:true,allowNull:false},
        price: { type: sequelize.DECIMAL(10, 2) ,allowNull:false},
    },
    {
     
        // dont use createdAt/update
        timestamps: false,
    }
);
module.exports = menu_items;
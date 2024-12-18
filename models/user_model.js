const sequelize = require("sequelize");
const db = require("../config/database");
var user = db.define(
    "user",
    {
        name: { type: sequelize.STRING ,allowNull:false},
        email:{type: sequelize.STRING,unique:true,allowNull:false},
        password: { type: sequelize.STRING ,allowNull:false},
        token: { type: sequelize.STRING },
    },
    {
     
        // dont use createdAt/update
        timestamps: false,
    }
);
module.exports = user;


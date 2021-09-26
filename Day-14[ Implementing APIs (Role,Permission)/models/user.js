const { DataTypes } = require("sequelize");
const sequelize = require("../database/index");

//User is an Table Name
const User = sequelize.define(
  "User",
  {
    fullName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    role: {
      type: DataTypes.STRING,
      default: "user",
      enum: ["user", "admin", "superadmin"],
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    username: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    freezeTableName: true,
  },
  {
    timeStamps: true,
  }
);

module.exports = User;

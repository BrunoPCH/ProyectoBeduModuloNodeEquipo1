//import Datatypes
const { DataTypes } = require("sequelize");
// Import sequelize
const { sequelize } = require("./sequelize");

// MODEL OF SQL DB
// username varchar(50) [not null, unique]
//   full_name varchar(50) [not null]
//   email varchar(20) [not null, unique]
//   password varchar(check (password between 8 and 20)) [not null]

module.exports = sequelize.define("user", {
  username: {
    type: DataTypes.STRING(50),
    allowNull: false,
    unique: true,
  },
  fullName: {
    type: DataTypes.STRING(50),
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING(50),
    allowNull: false,
    unique: true,
  },
  password: {
    type: DataTypes.STRING(20),
    allowNull: false,
    validate: {
      len: [8, 20],
    },
  },
});

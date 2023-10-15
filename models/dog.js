const { DataTypes } = require("sequelize");
const { sequelize } = require("./sequelize");

module.exports = sequelize.define("dog", {
  name: {
    type: DataTypes.STRING(50),
    allowNull: false,
  },
  age: {
    type: DataTypes.INTEGER(50),
    allowNull: false,
    validate: {
      len: [1, 13],
    }
  },
  breed: {
    type: DataTypes.STRING(20),
    allowNull: true,
  },
  vaccinated: {
    type: DataTypes.BOOLEAN,
    allowNull: false
  },
  unfriendly_dog: {
    type : DataTypes.BOOLEAN
  },
  weight: {
    type: DataTypes.INTEGER(20),
    validate: {
      len: [1, 70],
    }
  },
  has_allergies: {
    type: DataTypes.BOOLEAN,
    allowNull: false
  },
  allergies: {
    type: DataTypes.STRING(200),
    allowNull: true
  },
  notes: {
    type: DataTypes.STRING(200),
    allowNull: true
  }
});

//import Datatypes
const { DataTypes } = require("sequelize");
// Import sequelize
const { sequelize } = require("./sequelize");

//  TABLE `DogBreeds` (
//     `id` integer UNIQUE NOT NULL AUTO_INCREMENT COMMENT 'Generado automaticamente',
//     `breed` varchar(60) UNIQUE PRIMARY KEY NOT NULL,
//     `group` varchar(60),
//     `section` varchar(60),
//     `country` varchar(60),
//     `urlFCI` varchar(100),
//     `urlImage` varchar(100),
//     `pdfBreed` varchar(200)
//   );

module.exports = sequelize.define("dogBreed", {
  id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    unique: true,
    autoIncrement: true,
  },
  breed: {
    type: DataTypes.STRING(60),
    allowNull: false,
    primaryKey: true,
  },
  group: {
    type: DataTypes.STRING(60),
  },
  section: {
    type: DataTypes.STRING(60),
  },
  country: {
    type: DataTypes.STRING(60),
  },
  urlFCI: {
    type: DataTypes.STRING(200),
  },
  urlImage: {
    type: DataTypes.STRING(200),
  },
  pdfBreed: {
    type: DataTypes.STRING(200),
  },
});

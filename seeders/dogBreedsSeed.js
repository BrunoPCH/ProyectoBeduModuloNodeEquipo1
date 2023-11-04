// const { Sequelize } = require("sequelize");
const Dog = require("../models/dog");

const { connect, sync, sequelize } = require("../models/sequelize");

// const sequelize = new Sequelize({
//   dialect: "sqlite",
//   storage: "./perrinPerrout.db",
// });

// async function connect() {
//   try {
//     await sequelize.authenticate();
//     console.log(">>😎 Conectado a la base de datos");
//   } catch (e) {
//     console.error("<<😤 No se pudo conectar a la BD ");
//     console.error(e);
//   }
// }
connect();

const DogBreed = require("../models/dogbreed");
// // llamando al model
// const { DataTypes } = require("sequelize");
// const DogBreed = sequelize.define("dogBreeds", {
//   id: {
//     type: DataTypes.INTEGER,
//     allowNull: false,
//     unique: true,
//     autoIncrement: true,
//   },
//   breed: {
//     type: DataTypes.STRING(60),
//     unique: true,
//     allowNull: false,
//     primaryKey: true,
//   },
//   group: {
//     type: DataTypes.STRING(60),
//   },
//   section: {
//     type: DataTypes.STRING(60),
//   },
//   country: {
//     type: DataTypes.STRING(60),
//   },
//   urlFCI: {
//     type: DataTypes.STRING(200),
//   },
//   urlImage: {
//     type: DataTypes.STRING(200),
//   },
//   pdfBreed: {
//     type: DataTypes.STRING(200),
//   },
// });
DogBreed.hasMany(Dog);
Dog.belongsTo(DogBreed);

// async function sync() {
//   try {
//     await sequelize.sync({ force: false });
//     console.log("Base de datos actualizada 🤓");
//   } catch (e) {
//     console.error("No se puede actualizar la BD 😭");
//     console.error(e);
//   }
// }
sync();

const DogbreedData = require("../informationResources/fciBreedsData.json");
async function createDogBreeds() {
  try {
    await sync();
    console.log(">>Base de datos en proceso de actualización 🧐");
    const DogBreeds = await DogBreed.bulkCreate(DogbreedData);
    console.log(">> Es hora de festejar, la BD fue actualizada 🤩");
  } catch (e) {
    console.error(">> ayy ya!!! Sigue intentando... 😭😭");
    console.error(e);
  }
}
createDogBreeds();

// INSTALLING SEQUELIZE
const { Sequelize } = require("sequelize");

const { FORCE_DB_UPDATE } = process.env;

// DB conection
const sequelize = new Sequelize({
  // Sqlite conection
  dialect: "sqlite",
  // file localization
  storage: "./perrinPerrout.db",
});

exports.sequelize = sequelize;

// Probando conexion a BD con Sqlite3
exports.connect = async function () {
  try {
    await sequelize.authenticate();
    console.log("🗄 > Conectado a la base de datos ✅");
  } catch (e) {
    console.error("🛑 > No se pudo conectar con la base de datos ❌");
    console.error(e);
  }
};

// UPDATING BD
exports.sync = async function () {
  try {
    //check file .env force updating DB
    await sequelize.sync({ force: FORCE_DB_UPDATE === "yes" });
    console.log("🗄 > ¡Base de datos actualizada! ✅");
  } catch (e) {
    console.error("⛔️ > No se puede actualizar la base de datos ❌");
    console.error(e);
  }
};

//AGREGANDO SEEDER
const breedData = require("../informationResources/fciBreedData.json");

export default {
  up: async (queryInterface) =>
    queryInterface.bulkInsert("dogBreed", [breedData], {}),
  down: async (queryInterface) => {
    await queryInterface.bulkDelete("dogBreed", {
      [Op.or]: [breedData],
    });
  },
};

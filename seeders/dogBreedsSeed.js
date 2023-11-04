const Dog = require("../models/dog");

const { connect, sync, sequelize } = require("../models/sequelize");

connect();

const DogBreed = require("../models/dogBreed");

//Estableciendo relaciones
DogBreed.hasMany(Dog);
Dog.belongsTo(DogBreed);

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

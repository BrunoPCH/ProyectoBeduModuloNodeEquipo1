// Importando funciones de carpeta services
const {
  getAllDog,
  findDog,
  insertDog,
  deleteDog,
  updateDog,
} = require("../services/dog");

exports.getDogs = async function (request, response) {
  const dogs = await getAllDog();
  response.status(200).json(dogs);
};

exports.getDog = async function (request, response) {
  const { id } = request.params;
  const dog = await findDog(id);
  response.status(200).json(dog);
};

exports.createDog = async function (request, response) {
  const { name, age, breed, vaccinated, unfriendly_dog, weight, 
          has_allergies, allergies, notes } = request.body;
  const dog = await insertDog({  name, age, breed, vaccinated, unfriendly_dog, weight, 
    has_allergies, allergies, notes });
  response.status(201).json(dog);
};

exports.updateDog = async function (request, response) {
  const { name, age, breed, vaccinated, unfriendly_dog, weight, 
    has_allergies, allergies, notes } = request.body;
  const { id } = request.params;

  await updateDog(id, { name, age, breed, vaccinated, unfriendly_dog, weight, 
    has_allergies, allergies, notes });

  response.status(204).end();
};

exports.deleteDog = async function (request, response) {
  const { id } = request.params;
  await deleteDog(id);
  response.status(204).end();
};
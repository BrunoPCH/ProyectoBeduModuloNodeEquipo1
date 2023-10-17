// Importando funciones de carpeta services
const {
  findAll,
  findById,
  insert,
  deleteById,
  update,
} = require("../services/dog");

exports.getDogs = async function (request, response) {
  const dogs = await findAll();
  response.status(200).json(dogs);
};

exports.getDog = async function (request, response) {
  const { id } = request.params;
  const dog = await findById(id);
  response.status(200).json(dog);
};

exports.createDog = async function (request, response) {
  const {
    name,
    age,
    breed,
    vaccinated,
    is_unfriendly_dog,
    weight,
    has_allergies,
    allergies,
    notes,
  } = request.body;
  const dog = await insert({
    name,
    age,
    breed,
    vaccinated,
    is_unfriendly_dog,
    weight,
    has_allergies,
    allergies,
    notes,
    userId: request.user.id,
  });
  response.status(201).json(dog);
};

exports.updateDog = async function (request, response) {
  const {
    name,
    age,
    breed,
    vaccinated,
    is_unfriendly_dog,
    weight,
    has_allergies,
    allergies,
    notes,
  } = request.body;
  const { id } = request.params;

  await update(id, {
    name,
    age,
    breed,
    vaccinated,
    is_unfriendly_dog,
    weight,
    has_allergies,
    allergies,
    notes,
  });

  response.status(204).end();
};

exports.deleteDog = async function (request, response) {
  const { id } = request.params;
  await deleteById(id);
  response.status(204).end();
};

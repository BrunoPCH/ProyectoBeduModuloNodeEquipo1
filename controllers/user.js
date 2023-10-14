// Importando funciones de carpeta services
const {
  findAll,
  findById,
  insert,
  deleteById,
  update,
} = require("../services/user");

exports.getUsers = async function (request, response) {
  const users = await findAll();
  response.status(200).json(users);
};

exports.getUser = async function (request, response) {
  const { id } = request.params;
  const user = await findById(id);
  response.status(200).json(user);
};

exports.createUser = async function (request, response) {
  const { username, fullName, email, password } = request.body;
  const user = await insert({ username, fullName, email, password, userId: 1 });
  response.status(201).json(user);
};

exports.updateUser = async function (request, response) {
  const { username, fullName, email, password } = request.body;
  const { id } = request.params;

  await update(id, { username, fullName, email, password });
  response.status(204).end();
};

exports.deleteUser = async function (request, response) {
  const { id } = request.params;
  await deleteById(id);
  response.status(204).end();
};

//Esto solo es una prueba que hice para ver si se sincroniza el repo con el servidor

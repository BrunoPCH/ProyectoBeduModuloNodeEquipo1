const express = require("express");
const router = express.Router();

const {
  getUsers,
  createUser,
  getUser,
  deleteUser,
  updateUser,
} = require("../controllers/user");

// Importando validador joi que servira como middleware y se pondra despues de definir la ruta en express, se pone como parametro
const validator = require("../middlewares/validator");
const {
  createUserSchema,
  updateUserSchema,
  paramsSchema,
} = require("../validations/user");

//Creating common user
// router.get("/createUser", function (request, response) {
//   // response.send(">>> Aqui se crea usuario");

// });

// METODOS HTTP

// Obtener usuarios poner atención al plural en "/users"
router.get("/users", getUsers);
// Obtener usuario por ID
router.get("/user/:id", validator.params(paramsSchema), getUser);
// Crear usuario
router.post(
  "/user",

  validator.body(createUserSchema),
  createUser
);
//Actualizar info de usuario por ID
router.put(
  "/users/:id",
  validator.params(paramsSchema),
  validator.body(updateUserSchema),
  updateUser
);
//Eliminar Usuario por ID
router.delete("/users/:id", validator.params(paramsSchema), deleteUser);

module.exports = router;

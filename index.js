// Intalling express
const express = require("express");
const app = express();

//Declaring EXPRESS
app.use(express.json());

// INSTALLING dot.env
require("dotenv").config();

// Importing DB
const { initDatabase } = require("./db");
// inicializando la BD
initDatabase();

// Routers
const createUserRouter = require("./routers/user.js");

//MAnejo de errores
const validationError = require("./middlewares/validation-error");
const unknownError = require("./middlewares/unknown-error");

//Declaration of Routers
app.use(createUserRouter);

//Manejo de errores con un MIDLEWARE FINAL
// Los midlewares de manejo de errores reciben 4 parametros ERROR, REQUEST, RESPONSE, NEXT
//
app.use(validationError);
app.use(unknownError);

app.use(function (error, request, response, next) {
  console.log(error);
  response.end();
});
// Open port with .env varieble
app.listen(process.env.SERVER_PORT, function () {
  console.log("🚀> Escuchando puerto " + process.env.SERVER_PORT + " ✅");
});

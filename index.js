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
const dogsRouter = require("./routers/dog");

const UserRouter = require("./routers/user");
//Ruta de bookings
const BookingRouter = require("./routers/booking");
// Prueba ruta helloworld
const helloWorld = require("./routers/helloworld");
const goodBye = require("./routers/goodbye");
// Router auth.js
const authRouter = require("./routers/auth");
// Router DogBreeds
const DogBreedRouter = require("./routers/dogBreed");

//Manejo de errores
const validationError = require("./middlewares/validation-error");
const unknownError = require("./middlewares/unknown-error");

//Declaration of Routers
app.use(UserRouter);
app.use(dogsRouter);
//Para hacer reservaciones
app.use(BookingRouter);
// Prueba ruta helloworld
app.use(helloWorld);
app.use(goodBye);
//Ruta auth.js
app.use(authRouter);

//Ruta DogBreed
app.use(DogBreedRouter);

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

//pruebas en RENDER.com!!!

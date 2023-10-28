// Importing functions connect & sync of sequelize.js file
const { connect, sync } = require("./models/sequelize");

// Import model of BD of USERs
const User = require("./models/user");
// Import model of BD of DOGs
const Dog = require("./models/dog");
// Import model of BD of BOOKINGs
const Booking = require("./models/booking");

// Import model of DB of DogBreeds
const DogBreed = require("./models/dogBreed");

// // "Un usuario tiene muchos perros"
User.hasMany(Dog);
Dog.belongsTo(User);

// // "Un perro puede tener muchas reservaciones"
Dog.hasMany(Booking);
Booking.belongsTo(Dog);

//Una raza puede tener muchos perros
DogBreed.hasMany(Dog);
Dog.belongsTo(DogBreed);

//Exporta BD y ESPERA FUNCIONES ASINCRONAS CONNECT y SYNC que estan en sequelize.js
exports.initDatabase = async function () {
  await connect();
  await sync();
};

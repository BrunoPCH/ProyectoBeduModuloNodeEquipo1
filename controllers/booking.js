const {
  findAll,
  findById,
  insert,
  deleteById,
  update,
} = require("../services/booking");

exports.getBookings = async function (request, response) {
  const bookings = await findAll();
  response.status(200).json(bookings);
};

exports.getBooking = async function (request, response) {
  const { id } = request.params;
  const booking = await findById(id);
  response.status(200).json(booking);
};

exports.createBooking = async function (request, response) {
  const { checkInDate, checkOutDate, observations } = request.body;
  const booking = await insert({
    idDog,
    checkInDate,
    checkOutDate,
    observations,
    userId: request.user.id,
  });
  response.status(201).json(booking);
};

exports.updateBooking = async function (request, response) {
  const { idDog, checkInDate, checkOutDate, observations } = request.body;
  const { id } = request.params;

  await update(id, { idDog, checkInDate, checkOutDate, observations });
  response.status(204).end();
};

exports.deleteBooking = async function (request, response) {
  const { id } = request.params;
  await deleteById(id);
  response.status(204).end();
};

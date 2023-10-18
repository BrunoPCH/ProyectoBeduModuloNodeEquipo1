const {
  findAll,
  findById,
  findByDogId,
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
exports.getBookingByDogId = async function (request, response) {
  const { dogId } = request.params;
  const booking = await findByDogId(dogId);
  response.status(200).json(booking);
};

exports.createBooking = async function (request, response) {
  const { dogId, checkInDate, checkOutDate, isBookingActive, observations } =
    request.body;
  const booking = await insert({
    checkInDate,
    checkOutDate,
    observations,
    isBookingActive,
    userId: request.user.id,
    dogId,
  });
  response.status(201).json(booking);
};

exports.updateBooking = async function (request, response) {
  const { dogId, checkInDate, checkOutDate, isBookingActive, observations } =
    request.body;
  const { id } = request.params;

  await update(id, {
    dogId,
    checkInDate,
    checkOutDate,
    isBookingActive,
    observations,
  });
  response.status(204).end();
};

exports.deleteBooking = async function (request, response) {
  const { id } = request.params;
  await deleteById(id);
  response.status(204).end();
};

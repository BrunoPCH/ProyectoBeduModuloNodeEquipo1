const Booking = require("../models/booking");

exports.findAll = function () {
  return Booking.findAll();
};

exports.findById = function (id) {
  return Booking.findByPk(id);
};
exports.findByDogId = function (dogId) {
  return Booking.findAll({
    where: {
      dogId,
    },
  });
};

exports.insert = function (data) {
  return Booking.create(data);
};

exports.update = async function (id, data) {
  await Booking.update(data, {
    where: {
      id,
    },
  });
};

exports.deleteById = async function (id) {
  const booking = await Booking.findByPk(id);
  await booking.destroy();
};

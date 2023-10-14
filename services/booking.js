const Booking = require("../models/booking");

exports.findAll = function () {
  return Booking.findAll();
};

exports.findById = function (id) {
  return Booking.findByPk(id);
};

exports.insert = function (data) {
  return booking.create(data);
};

exports.update = async function (id, data) {
  await User.update(data, {
    where: {
      id,
    },
  });
};

exports.deleteById = async function (id) {
  const booking = await User.findByPk(id);
  await booking.destroy();
};

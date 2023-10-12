const User = require("../models/user");

exports.findAll = function () {
  return User.findAll();
};

exports.findById = function (id) {
  return User.findByPk(id);
};

exports.insert = function (data) {
  return User.create(data);
};

exports.update = async function (id, data) {
  await User.update(data, {
    where: {
      id,
    },
  });
};

exports.deleteById = async function (id) {
  const post = await User.findByPk(id);
  await post.destroy();
};

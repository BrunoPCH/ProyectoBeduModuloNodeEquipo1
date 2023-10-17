const dog = require("../models/dog");

exports.insert = function (data) {
  return dog.create(data);
};

exports.findById = function (id) {
  return dog.findByPk(id);
};

exports.update = async function (id, data) {
  await dog.update(data, {
    where: {
      id,
    },
  });
};

exports.findAll = function () {
  return dog.findAll();
};

exports.deleteById = async function (id) {
  const post = await dog.findByPk(id);
  await post.destroy();
};

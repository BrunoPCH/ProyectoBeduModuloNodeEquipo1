const dog = require("../models/dog");

exports.insertDog = function (data) {
  return dog.create(data);
};

exports.findDog = function (id) {
  return dog.findByPk(id);
};

exports.updateDog = async function (id, data) {
  await dog.update(data, {
    where: {
      id,
    },
  });
};

exports.getAllDog = function () {
  return dog.findAll();
};

exports.deleteDog = async function (id) {
  const post = await dog.findByPk(id);
  await post.destroy();
};

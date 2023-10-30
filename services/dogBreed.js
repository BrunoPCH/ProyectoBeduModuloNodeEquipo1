const DogBreed = require("../models/dogbreed");

exports.findAll = function () {
  return DogBreed.findAll();
};

exports.findByBreed = function (breed) {
  return DogBreed.findAll({
    where: {
      breed,
    },
  });
};
exports.findByGroup = function (group) {
  return DogBreed.findAll({
    where: {
      group,
    },
  });
};

exports.insert = function (data) {
  return DogBreed.create(data);
};

exports.update = async function (breed, data) {
  await DogBreed.update(data, {
    where: {
      breed,
    },
  });
};

exports.deleteByBreed = async function (breed) {
  const DogBreed = await DogBreed.findAll(breed, {
    where: {
      breed,
    },
  });
  await DogBreed.destroy();
};

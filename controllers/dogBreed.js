const {
  findAll,
  findByBreed,
  findByGroup,
  insert,
  deleteByBreed,
  update,
} = require("../services/dogBreed");

exports.getDogBreeds = async function (request, response) {
  const dogBreeds = await findAll();
  response.status(200).json(dogBreeds);
};

exports.getDogBreed = async function (request, response) {
  const { breed } = request.params;
  const dogBreed = await findByBreed(breed);
  response.status(200).json(dogBreed);
};
exports.getDogBreedByGroup = async function (request, response) {
  const { group } = request.params;
  const dogBreed = await findByGroup(group);
  response.status(200).json(dogBreed);
};

exports.createDogBreed = async function (request, response) {
  const { breed, group, section, country, urlFCI, urlImage, pdfBreed } =
    request.body;
  const dogBreed = await insert({
    breed,
    group,
    section,
    country,
    urlFCI,
    urlImage,
    pdfBreed,
    userId: request.user.id,
  });
  response.status(201).json(dogBreed);
};

exports.updateDogBreed = async function (request, response) {
  const { group, section, country, urlFCI, urlImage, pdfBreed } = request.body;
  const { breed } = request.params;

  await update(breed, {
    breed,
    group,
    section,
    country,
    urlFCI,
    urlImage,
    pdfBreed,
  });
  response.status(204).end();
};

exports.deleteDogBreed = async function (request, response) {
  const { breed } = request.params;
  await deleteByBreed(breed);
  response.status(204).end();
};

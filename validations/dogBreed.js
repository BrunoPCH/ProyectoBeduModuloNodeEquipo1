const Joi = require("joi");

//  TABLE `DogBreeds` (
//     `id` integer UNIQUE NOT NULL AUTO_INCREMENT COMMENT 'Generado automaticamente',
//     `breed` varchar(60) UNIQUE PRIMARY KEY NOT NULL,
//     `group` varchar(60),
//     `section` varchar(60),
//     `country` varchar(60),
//     `urlFCI` varchar(100),
//     `urlImage` varchar(100),
//     `pdfBreed` varchar(200)
//   );

exports.createDogBreedSchema = Joi.object({
  breed: Joi.string().max(60).uppercase().required(),
  group: Joi.string().min(10).max(60).optional(),
  section: Joi.string().min(10).max(60).optional(),
  country: Joi.string().min(20).max(60).optional(),
  urlFCI: Joi.string().max(100).uri().optional(),
  urlImage: Joi.string().max(100).uri().optional(),
  pdfBreed: Joi.string().max(200).uri().optional(),
});

// Se debe de buscar por medio del nombre de la raza
exports.updateDogBreedSchema = Joi.object({
  id: Joi.number().optional(),
  breed: Joi.string().max(60).uppercase().required(),
  group: Joi.string().min(10).max(60).optional(),
  section: Joi.string().min(10).max(60).optional(),
  country: Joi.string().min(20).max(60).optional(),
  urlFCI: Joi.string().max(100).uri().optional(),
  urlImage: Joi.string().max(100).uri().optional(),
  pdfBreed: Joi.string().max(200).uri().optional(),
}).min(1);

exports.paramsSchema = Joi.object({
  id: Joi.number().required(),
});
// Se debe de buscar por medio del nombre de la raza
exports.findDogBreedByBreedSchema = Joi.object({
  breed: Joi.string().max(60).uppercase().required(),
});
exports.findDogBreedByGroupSchema = Joi.object({
  group: Joi.string().min(10).max(60).required(),
});

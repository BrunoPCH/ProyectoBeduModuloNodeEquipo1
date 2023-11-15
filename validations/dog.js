const Joi = require("joi");

exports.createDogSchema = Joi.object({
  name: Joi.string()
    .min(2)
    .max(50)
    .pattern(/^(?=.{2,50}$)(?![_.])(?!.*[_.]{2})[a-zA-Z._]+(?<![_.])$/)
    .required(),
  age: Joi.number().max(60).required(),
  breed: Joi.string().max(20).required(),
  vaccinated: Joi.boolean().required(),
  is_unfriendly_dog: Joi.boolean().required(),
  weight: Joi.number().min(1).max(70).optional(),
  has_allergies: Joi.boolean().required(),
  allergies: Joi.string().max(200).optional(),
  notes: Joi.string().max(200).optional(),
});

exports.updateDogSchema = Joi.object({
  name: Joi.string()
    .min(2)
    .max(50)
    .pattern(/^(?=.{2,50}$)(?![_.])(?!.*[_.]{2})[a-zA-Z._]+(?<![_.])$/)
    .optional(),
  age: Joi.number().max(50).optional(),
  breed: Joi.string().max(20).optional(),
  vaccinated: Joi.boolean().optional(),
  is_unfriendly_dog: Joi.boolean().optional(),
  weight: Joi.number().min(1).max(70).optional(),
  has_allergies: Joi.boolean().optional(),
  allergies: Joi.string().max(200).optional(),
  notes: Joi.string().max(200).optional(),
}).min(1);

exports.paramsIdSchema = Joi.object({
  id: Joi.number().required(),
});

const Joi = require("joi");

// MODEL OF SQL DB
// username varchar(50) [not null, unique]
//   full_name varchar(50) [not null]
//   email varchar(20) [not null, unique]
//   password varchar(check (password between 8 and 20)) [not null]
exports.createUserSchema = Joi.object({
  username: Joi.string()
    .min(5)
    .max(50)
    .pattern(/^(?=.{5,50}$)(?![_.])(?!.*[_.]{2})[a-zA-Z0-9._]+(?<![_.])$/)
    .required(),
  fullName: Joi.string().max(50).required(),
  email: Joi.string().max(100).email().required(),
  password: Joi.string().min(8).max(20).required(),
});

exports.updateUserSchema = Joi.object({
  username: Joi.string()
    .min(5)
    .max(50)
    .pattern(/^(?=.{5,50}$)(?![_.])(?!.*[_.]{2})[a-zA-Z0-9._]+(?<![_.])$/)
    .optional(),
  fullName: Joi.string().max(50).optional(),
  email: Joi.string().max(100).email().optional(),
  password: Joi.string().min(8).max(20).optional(),
}).min(1);

exports.paramsSchema = Joi.object({
  id: Joi.number().required(),
});

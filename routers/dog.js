const express = require("express");
const router = express.Router();

const {
  getDog,
  createDog,
  getDogs,
  updateDog,
  deleteDog,
} = require("../controllers/dog");

const validator = require("../middlewares/validator");
const jwtValidator = require("../middlewares/jwt");
const {
  createDogSchema,
  updateDogSchema,
  paramsIdSchema,
} = require("../validations/dog");

router.get("/dogs", getDogs);

router.get("/dog/:id", validator.params(paramsIdSchema), getDog);

router.post("/dog", jwtValidator, validator.body(createDogSchema), createDog);

router.put(
  "/dog/:id",
  jwtValidator,
  validator.params(paramsIdSchema),
  validator.body(updateDogSchema),
  updateDog
);

router.delete(
  "/dogs/:id",
  jwtValidator,
  validator.params(paramsIdSchema),
  deleteDog
);

module.exports = router;

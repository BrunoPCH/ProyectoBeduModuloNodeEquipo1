const express = require("express");
const router = express.Router();

const {
  getDogBreeds,
  getDogBreed,
  getDogBreedByGroup,
  createDogBreed,
  updateDogBreed,
  deleteDogBreed,
} = require("../controllers/dogBreed");

const validator = require("../middlewares/validator");
const jwtValidator = require("../middlewares/jwt");
const {
  createDogBreedSchema,
  updateDogBreedSchema,
  paramsSchema,
  findDogBreedByBreedSchema,
  findDogBreedByGroupSchema,
} = require("../validations/dogBreed");

router.get("/dog-breeds", getDogBreeds);
router.get(
  "/dog-breeds/:breed",
  validator.params(findDogBreedByBreedSchema),
  getDogBreed
);

router.get(
  "/dog-breeds/:group",
  validator.params(findDogBreedByGroupSchema),
  getDogBreedByGroup
);

router.post(
  "/dog-breeds",
  jwtValidator,
  validator.body(createDogBreedSchema),
  createDogBreed
);

router.put(
  "/dog-breeds/:breed",
  jwtValidator,
  validator.params(findDogBreedByBreedSchema),
  validator.body(updateDogBreedSchema),
  updateDogBreed
);

router.delete(
  "/bookings/:breed",
  jwtValidator,
  validator.params(findDogBreedByBreedSchema),
  deleteDogBreed
);

module.exports = router;

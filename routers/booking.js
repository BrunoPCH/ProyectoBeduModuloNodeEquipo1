const express = require("express");
const router = express.Router();

const {
  getBookings,
  createBooking,
  getBooking,
  getBookingByDogId,
  deleteBooking,
  updateBooking,
} = require("../controllers/booking");

const validator = require("../middlewares/validator");
const jwtValidator = require("../middlewares/jwt");
const {
  createBookingSchema,
  updateBookingSchema,
  paramsSchema,
  findBookByDogIdSchema,
} = require("../validations/booking");

router.get("/bookings", getBookings);
router.get("/bookings/:id", validator.params(paramsSchema), getBooking);

router.get(
  "/bookings/dog/:dogId",
  validator.params(findBookByDogIdSchema),
  getBookingByDogId
);

router.post(
  "/bookings",
  jwtValidator,
  validator.body(createBookingSchema),
  createBooking
);

router.put(
  "/bookings/:id",
  jwtValidator,
  validator.params(paramsSchema),
  validator.body(updateBookingSchema),
  updateBooking
);

router.delete(
  "/bookings/:id",
  jwtValidator,
  validator.params(paramsSchema),
  deleteBooking
);

module.exports = router;

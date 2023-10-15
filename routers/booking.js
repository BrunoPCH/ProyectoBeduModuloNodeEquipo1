const express = require("express");
const router = express.Router();

const {
  getBookings,
  createBooking,
  getBooking,
  deleteBooking,
  updateBooking,
} = require("../controllers/booking");

const validator = require("../middlewares/validator");
const {
  createBookingSchema,
  updateBookingSchema,
  paramsSchema,
} = require("../validations/booking");

router.get("/bookings", getBookings);

router.get("/bookings/:id", validator.params(paramsSchema), getBooking);

router.post(
  "/bookings",

  validator.body(createBookingSchema),
  createBooking
);

router.put(
  "/bookings/:id",
  validator.params(paramsSchema),
  validator.body(updateBookingSchema),
  updateBooking
);

router.delete("/bookings/:id", validator.params(paramsSchema), deleteBooking);

module.exports = router;

const Joi = require("joi");

// Table BOOKINGS {
//     booking_id integer [increment, not null, unique, pk, note:'Generado automaticamente']
//     checkin_date date [note:'evaluar si puede ser anterior a la fecha actual', not null]
//     checkout_date date [note:'no puede ser anterior al checkin', not null]
//     is_booking_active boolean [not null]
//     observations varchar(200)
//     created_at timestamp [note:'Generado automaticamente']
//     Note: '📆 basado en check in y check out'
//     }

exports.createBookingSchema = Joi.object({
  dogId: Joi.number().required(),
  //checkInDate: Joi.date().greater("now").required(),
  checkInDate: Joi.date().required(),
  checkOutDate: Joi.date().greater(Joi.ref("checkInDate")).required(),
  isBookingActive: Joi.boolean().optional(),
  observations: Joi.string().min(3).max(200).optional(),
});

exports.updateBookingSchema = Joi.object({
  dogId: Joi.number().optional(),
  checkInDate: Joi.date().greater("now").optional(),
  checkOutDate: Joi.date().greater(Joi.ref("checkInDate")).optional(),
  isBookingActive: Joi.boolean().optional(),
}).min(1);

exports.paramsSchema = Joi.object({
  id: Joi.number().required(),
});

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
// checkInDate: {
//     type: DataTypes.DATEONLY,
//     allowNull: false,
//     unique: false,
//   },
//   checkOutDate: {
//     type: DataTypes.DATEONLY,
//     allowNull: false,
//     unique: false,
//   },
//   isBookingActive: {
//     type: DataTypes.BOOLEAN,
//     allowNull: false,
//     defaultValue: false,
//   },
//   observations: {
//     type: DataTypes.STRING(200),
//     allowNull: true,
//   },

exports.createBookingSchema = Joi.object({
  checkInDate: Joi.date().greater("now").requiered(),
  checkOutDate: Joi.date().greater(Joi.ref("checkInDate")).required(),
  isBookingActive: Joi.boolean().optional,
  observations: Joi.string().min(8).max(200).optional,
});

exports.updateBookingSchema = Joi.object({
  checkInDate: Joi.date().greater("now").optional(),
  checkOutDate: Joi.date().greater(Joi.ref("checkInDate")).optional(),
  isBookingActive: Joi.boolean().optional,
  observations: Joi.string().min(8).max(200).optional,
}).min(1);

exports.paramsSchema = Joi.object({
  id: Joi.number().required(),
});

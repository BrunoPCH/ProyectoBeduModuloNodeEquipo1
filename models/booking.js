//import Datatypes
const { DataTypes } = require("sequelize");
// Import sequelize
const { sequelize } = require("./sequelize");

// Table BOOKINGS {
//     booking_id integer [increment, not null, unique, pk, note:'Generado automaticamente']
//     checkin_date date [note:'evaluar si puede ser anterior a la fecha actual', not null]
//     checkout_date date [note:'no puede ser anterior al checkin', not null]
//     is_booking_active boolean [not null]
//     observations varchar(200)
//     created_at timestamp [note:'Generado automaticamente']
//     Note: '📆 basado en check in y check out'
//     }

module.exports = sequelize.define("booking", {
  idDog: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  checkInDate: {
    type: DataTypes.DATEONLY,
    allowNull: false,
    unique: false,
  },
  checkOutDate: {
    type: DataTypes.DATEONLY,
    allowNull: false,
    unique: false,
  },
  isBookingActive: {
    type: DataTypes.BOOLEAN,
    allowNull: true,
    defaultValue: false,
  },
  observations: {
    type: DataTypes.STRING(200),
    allowNull: true,
  },
});

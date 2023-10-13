module.exports = function (err, request, response, next) {
  if (err && err.error && err.error.isJoi) {
    console.error(err);
    response.status(400).json({
      message: "No llenaste bien el formulario 🤦🏻‍♂️",
      messagedev: "El middleware de validación dice lo siguiente:",
      code: "ERR_VALIDATION",
      details: err.error.details,
    });
  } else {
    next(err);
  }
};

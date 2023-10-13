module.exports = function (err, request, response, next) {
  response.status(500).json({
    message: "Hay un error inesperado 😫",
    messagedev: "Hubo un error que no esta controlado por el código",
    code: "ERR_UNKNOWN",
    details: err,
  });
};

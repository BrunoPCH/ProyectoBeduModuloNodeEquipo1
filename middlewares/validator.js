const { createValidator } = require("express-joi-validation");

// pass error true manda el error a express
module.exports = createValidator({
  passError: true,
});

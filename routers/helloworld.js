const express = require("express");
const { func } = require("joi");
const router = express.Router();

router.get("/hellowworld", function (request, response) {
  response.send("Hello world 🖖🏼");
});
module.exports = router;

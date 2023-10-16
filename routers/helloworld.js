const express = require("express");
const { func } = require("joi");
const router = express.Router();

router.get("/helloworld", function (request, response) {
  response.send("Hola BEDUTEAM 🖖🏼");
});

module.exports = router;

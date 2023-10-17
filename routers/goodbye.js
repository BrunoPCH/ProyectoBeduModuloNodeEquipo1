const express = require("express");
const { func } = require("joi");
const router = express.Router();

router.get("/goodbye", function (request, response) {
  response.send("¡¡¡Adios mundo cruel 💁🏼‍♂️!!!");
});
module.exports = router;

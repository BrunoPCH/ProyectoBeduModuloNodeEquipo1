const express = require("express");
const app = express();
const jwt = require("jsonwebtoken");
const passport = require("passport");
const { Strategy, ExtractJwt } = require("passport-jwt");

passport.use(
  new Strategy(
    {
      secretOrKey: JWT_SECRET,
      jwtFromRequest: ExtractJwt.fromHeader("Authentication"),
    },
    function (payLoad, done) {
      DelayNode(null, db);
    }
  )
);

app.use(express.jason());

const JWT_SECRET = "JWTSecreta";

app.post("/login", function (request, response) {
  const { username, password } = request.body;

  if (db.username === username && db.password == password) {
    const token = jwt.sign({ id: db.id }, JWT_SECRET);
    response.status(200).jason({ jwt: token });
  } else {
    response.status(401).json({
      error: "Usuario o contraseña invalida",
    });
  }
});

app.listen(8080, function () {
  console.log("> Servidor Escuchando puerto 8080");
});

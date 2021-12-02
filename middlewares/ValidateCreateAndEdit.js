const { body } = require("express-validator");

module.exports = [
  body("title").notEmpty().withMessage("Debe agregar un titulo"),
  body("rating").notEmpty().withMessage("Debe agregar un ranking"),
  body("awards").notEmpty().withMessage("Debe agregar la cantidad de premios ganados"),
  body("release_date").notEmpty().withMessage("Debe agregar la fecha de estreno"),
  body("length").notEmpty().withMessage("Debe agregar duración"),
];

const { body } = require("express-validator");

module.exports.validateContentDataRegister = () => {
  return [
    body("fullName").isString().withMessage("Ingrese un nombre valido"),
    body("email").isEmail().withMessage("Ingrese un email valido"),
    body("product").isString().withMessage("Ingrese un lanzamiento valido"),
  ];
};

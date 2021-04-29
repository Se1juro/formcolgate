const express = require("express");
const controller = require("./controller");
const router = express.Router();
const { validatePostError } = require("../../middlewares");

const {
  validateContentDataRegister,
} = require("../../middlewares/validateRegister");
router.post(
  "/",
  validateContentDataRegister(),
  validatePostError,
  controller.postRegister
);

module.exports = router;

const express = require("express");
const router = express.Router();
const register = require("../components/registers/routes");
router.use("/register", register);
module.exports = router;

const express = require("express");

const router = express.Router();

const { UserController } = require("../../controllers");
const { AuthRequestMiddlewares } = require("../../middlewares");

router.post(
  "/signup",
  AuthRequestMiddlewares.ValidateAuthRequest,
  UserController.signup
);

module.exports = router;

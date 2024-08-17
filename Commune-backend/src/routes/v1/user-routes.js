const express = require("express");

const router = express.Router();

const { UserController } = require("../../controllers");
const { AuthRequestMiddlewares } = require("../../middlewares");

router.post(
  "/signup",
  AuthRequestMiddlewares.ValidateAuthRequest,
  UserController.signup
);

router.post(
  "/signin",
  AuthRequestMiddlewares.ValidateAuthRequest,
  UserController.signin
);

router.get("/id", AuthRequestMiddlewares.checkAuth, UserController.getUser);

router.get("/:id", UserController.get);

module.exports = router;

import express from "express";

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

export default router;

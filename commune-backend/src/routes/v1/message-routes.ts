import express from "express";

const { AuthRequestMiddlewares } = require("../../middlewares");
const { MessageController } = require("../../controllers");

const router = express.Router();

router.post(
  "/send",
  AuthRequestMiddlewares.checkAuth,
  MessageController.sendMessage
);

export default router;

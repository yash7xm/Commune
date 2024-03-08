import express from "express";

const { AuthRequestMiddlewares } = require("../../middlewares");
const { MessageController } = require("../../controllers");

const router = express.Router();

router.post(
  "/send",
  AuthRequestMiddlewares.checkAuth,
  MessageController.sendMessage
);

router.get("/getAll/:channelId", MessageController.getAllMessages);

export default router;

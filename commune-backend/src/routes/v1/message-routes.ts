import express from "express";

const {
  AuthRequestMiddlewares,
  MsgRequestMiddlewares,
} = require("../../middlewares");

const { MessageController } = require("../../controllers");

const router = express.Router();

router.post(
  "/addFriend",
  AuthRequestMiddlewares.checkAuth,
  MsgRequestMiddlewares.checkUserExist,
  MsgRequestMiddlewares.checkChannelAlreadyExists,
  MessageController.addFriend
);

export default router;

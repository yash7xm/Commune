import express from "express";

const {
  AuthRequestMiddlewares,
  ChannelRequestMiddlewares,
} = require("../../middlewares");

const { ChannelController } = require("../../controllers");

const router = express.Router();

router.post(
  "/addFriend",
  AuthRequestMiddlewares.checkAuth,
  ChannelRequestMiddlewares.checkUserExist,
  ChannelRequestMiddlewares.checkChannelAlreadyExists,
  ChannelController.addChannel,
  ChannelController.addFriend
);

export default router;

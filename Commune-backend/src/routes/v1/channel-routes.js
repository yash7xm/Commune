const express = require("express");

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

router.get(
  "/getAll",
  AuthRequestMiddlewares.checkAuth,
  ChannelController.getAll
);

module.exports = router;

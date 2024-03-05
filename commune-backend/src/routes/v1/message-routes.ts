import express from "express";

const {
  AuthRequestMiddlewares,
  MsgRequestMiddlewares,
} = require("../../middlewares");

const router = express.Router();

router.post(
  "/addFriend",
  AuthRequestMiddlewares.checkAuth,
  MsgRequestMiddlewares.checkUserExist,
  MsgRequestMiddlewares.checkChannelAlreadyExists
);

export default router;

const { ErrorResponse } = require("../utils/common");
const { AppError } = require("../utils");
const { StatusCodes } = require("http-status-codes");

const { UserService, ChannelService } = require("../services");

async function checkUserExist(req, res, next) {
  try {
    const user = await UserService.getUserByUsername(req.body.username);
    req.user2 = user;
    next();
  } catch (error) {
    return res.status(error.statusCode).json(error);
  }
}

async function checkChannelAlreadyExists(req, res, next) {
  try {
    const channelExists = await ChannelService.isChannel({
      user1: req.user,
      user2: req.user2,
    });

    if (!channelExists) {
      next();
    } else {
      const errorMessage = "Channel already exists between the users.";
      const error = new AppError([errorMessage], StatusCodes.BAD_REQUEST);
      ErrorResponse.error = error;
      res.status(StatusCodes.BAD_REQUEST).json(ErrorResponse);
    }
  } catch (error) {
    return res.status(error.statusCode).json(error);
  }
}

module.exports = {
  checkUserExist,
  checkChannelAlreadyExists,
};

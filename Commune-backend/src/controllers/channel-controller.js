const { ChannelService } = require("../services");
const { SuccessResponse, ErrorResponse } = require("../utils/common");
const { StatusCodes } = require("http-status-codes");

async function addChannel(req, res, next) {
  const channelName = `${req.user}~${req.user2}`;
  try {
    const channel = await ChannelService.addChannel({
      organization: req.body.organization,
      name: channelName,
      type: req.body.type,
    });
    req.channelId = channel.id;
    next();
  } catch (error) {
    ErrorResponse.error = error;
    return res.status(error.statusCode).json(ErrorResponse);
  }
}

async function addFriend(req, res) {
  try {
    const user1Add = await ChannelService.addFriend({
      channelId: req.channelId,
      userId: req.user,
    });
    const user2Add = await ChannelService.addFriend({
      channelId: req.channelId,
      userId: req.user2,
    });
    SuccessResponse.data = user1Add + user2Add;
    return res.status(StatusCodes.CREATED).json(SuccessResponse);
  } catch (error) {
    ErrorResponse.error = error;
    return res.status(error.statusCode).json(ErrorResponse);
  }
}

async function getAll(req, res) {
  try {
    const response = await ChannelService.getAll(req.user);
    SuccessResponse.data = response;
    return res.status(StatusCodes.OK).json(SuccessResponse);
  } catch (error) {
    ErrorResponse.error = error;
    return res.status(error.statusCode).json(ErrorResponse);
  }
}

module.exports = {
  addChannel,
  addFriend,
  getAll,
};

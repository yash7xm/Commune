const { MessageService } = require("../services");
const { SuccessResponse, ErrorResponse } = require("../utils/common");
const { StatusCodes } = require("http-status-codes");
// const { sendMessageToSocket } = require("../edge-server");
const { produceMessage } = require("../kafka/producer");

async function sendMessage(req, res) {
  try {
    const message = await MessageService.sendMessage({
      channelId: req.body.channelId,
      userId: req.user,
      message: req.body.message,
      time: req.body.time,
    });
    // sendMessageToSocket(message);
    produceMessage(message);
    SuccessResponse.data = message;
    return res.status(StatusCodes.CREATED).json(SuccessResponse);
  } catch (error) {
    ErrorResponse.error = error;
    return res.status(error.statusCode).json(ErrorResponse);
  }
}

async function getAllMessages(req, res) {
  try {
    const messages = await MessageService.getAllMessages(req.params.channelId);
    SuccessResponse.data = messages;
    return res.status(StatusCodes.CREATED).json(SuccessResponse);
  } catch (error) {
    ErrorResponse.error = error;
    return res.status(error.statusCode).json(ErrorResponse);
  }
}

module.exports = {
  sendMessage,
  getAllMessages,
};

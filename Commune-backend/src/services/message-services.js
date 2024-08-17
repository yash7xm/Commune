const { MessageRepository } = require("../repositories");
const { StatusCodes } = require("http-status-codes");
const { AppError } = require("../utils");

const messageRepo = new MessageRepository();

async function sendMessage(data) {
  try {
    const message = await messageRepo.create(data);
    const createdMessage = await messageRepo.getMessage(message.id);

    return createdMessage;
  } catch (error) {
    if (
      error.name == "SequelizeValidationError" ||
      error.name == "SequelizeUniqueConstraintError"
    ) {
      let explanation = [];
      error.errors.forEach((err) => {
        explanation.push(err.message);
      });
      throw new AppError(explanation, StatusCodes.BAD_REQUEST);
    }
    throw new AppError(
      "Cannot send a new message",
      StatusCodes.INTERNAL_SERVER_ERROR
    );
  }
}

async function getAllMessages(channelId) {
  try {
    const messages = await messageRepo.getAllMessages(channelId);
    return messages;
  } catch (error) {
    if (
      error.name == "SequelizeValidationError" ||
      error.name == "SequelizeUniqueConstraintError"
    ) {
      let explanation = [];
      error.errors.forEach((err) => {
        explanation.push(err.message);
      });
      throw new AppError(explanation, StatusCodes.BAD_REQUEST);
    }
    throw new AppError(
      "Cannot fetch all the messages",
      StatusCodes.INTERNAL_SERVER_ERROR
    );
  }
}

module.exports = {
  sendMessage,
  getAllMessages,
};

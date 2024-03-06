const { MessageRepository } = require("../repositories");
import { StatusCodes } from "http-status-codes";
const { AppError } = require("../utils");

const messageRepo = new MessageRepository();

async function sendMessage(data: any) {
  try {
    const message = await messageRepo.create(data);
    return message;
  } catch (error: any) {
    if (
      error.name == "SequelizeValidationError" ||
      error.name == "SequelizeUniqueConstraintError"
    ) {
      let explanation: any = [];
      error.errors.forEach((err: any) => {
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

module.exports = {
  sendMessage,
};

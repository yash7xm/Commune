const { MembershipRepository, ChannelRepository } = require("../repositories");
import { StatusCodes } from "http-status-codes";
const { AppError } = require("../utils");

const membershipRepo = new MembershipRepository();
const channelRepo = new ChannelRepository();

async function addChannel(data: any) {
  try {
    const response = await channelRepo.create(data);
    return response;
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
      "Cannot create a new user object",
      StatusCodes.INTERNAL_SERVER_ERROR
    );
  }
}

async function addFriend(data: any) {
  try {
    const response = await membershipRepo.create(data);
    return response;
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
      "Cannot create a new user object",
      StatusCodes.INTERNAL_SERVER_ERROR
    );
  }
}

async function isChannel(data: any) {
  try {
    const newChanelName = `${data.user1}~${data.user2}`;
    const channel = await channelRepo.getUserByChannelName(newChanelName);
    return channel;
  } catch (error: any) {
    if (error.statusCode == StatusCodes.NOT_FOUND) {
      throw new AppError(
        "The user you requested is not present",
        error.statusCode
      );
    }
    throw new AppError(
      "Cannot fetch data of the requested user",
      StatusCodes.INTERNAL_SERVER_ERROR
    );
  }
}

async function getAll(data: any) {
  try {
    const response = await membershipRepo.getAll(data);
    return response;
  } catch (error: any) {
    if (error.statusCode == StatusCodes.NOT_FOUND) {
      throw new AppError(
        "The user you requested is not present",
        error.statusCode
      );
    }
    throw new AppError(
      "Cannot fetch data of the requested user",
      StatusCodes.INTERNAL_SERVER_ERROR
    );
  }
}

module.exports = {
  addChannel,
  addFriend,
  isChannel,
  getAll,
};

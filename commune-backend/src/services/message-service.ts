const { MembershipRepository } = require("../repositories");
import { StatusCodes } from "http-status-codes";
const { AppError } = require("../utils");

const membershipRepo = new MembershipRepository();

async function isChannel(data: any) {
  try {
    const user1 = await membershipRepo.getByUserId(data.user1);
    const user2 = await membershipRepo.getByUserId(data.user2);
    return user1.channelId == user2.channelId;
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
  isChannel,
};

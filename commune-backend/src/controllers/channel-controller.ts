import { Request, Response } from "express";
import { sendMessageToSocket } from "../edge-server";
const { ChannelService } = require("../services");
const { SuccessResponse, ErrorResponse } = require("../utils/common");
const { StatusCodes } = require("http-status-codes");

async function addChannel(req: any, res: Response, next: any) {
  const channelName = `${req.user}~${req.user2}`
  try {
    const channel = await ChannelService.addChannel({
      organization: req.body.organization,
      name: channelName,
      type: req.body.type,
    });
    req.channelId = channel.id;
    next();
  } catch (error: any) {
    ErrorResponse.error = error;
    return res.status(error.statusCode).json(ErrorResponse);
  }
}

async function addFriend(req: any, res: Response) {
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
  } catch (error: any) {
    ErrorResponse.error = error;
    return res.status(error.statusCode).json(ErrorResponse);
  }
}

module.exports = {
  addChannel,
  addFriend,
};

// export async function messageController(req: Request, res: Response) {
//   const msg = req.body.msg;

//   const response = await HandleIncomingMessage(msg);

//   if (response) {
//     sendMessageToSocket("yash", msg);
//   }

//   res.sendStatus(200);
// }

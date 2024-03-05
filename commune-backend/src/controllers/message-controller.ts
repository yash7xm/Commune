import { Request, Response } from "express";
import { sendMessageToSocket } from "../edge-server";
const { MessageService } = require("../services");
const { SuccessResponse, ErrorResponse } = require("../utils/common");
const { StatusCodes } = require("http-status-codes");

async function addChannel(req: any, res: Response, next: any) {
  try {
    const channel = await MessageService.addChannel({
      organization: req.body.organization,
      name: req.body.channelName,
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
    const data = {
      channelId: req.channelId,
      userId: req.user,
    };
    const response = await MessageService.addFriend(data);
    SuccessResponse.data = response;
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

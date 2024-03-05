import { Request, Response } from "express";
import { sendMessageToSocket } from "../edge-server";
const { MessageService } = require("../services");
const { SuccessResponse, ErrorResponse } = require("../utils/common");

async function addFriend(req: any, res: Response) {
  try {
    const data = {
      userId: req.user1,
      channelId: req.channelId,
      checkpoint: Date.now(),
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
  addFriend,
}

// export async function messageController(req: Request, res: Response) {
//   const msg = req.body.msg;

//   const response = await HandleIncomingMessage(msg);

//   if (response) {
//     sendMessageToSocket("yash", msg);
//   }

//   res.sendStatus(200);
// }


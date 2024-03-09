const { MessageService } = require("../services");
import { Request, Response } from "express";
const { SuccessResponse, ErrorResponse } = require("../utils/common");
const { StatusCodes } = require("http-status-codes");
import { sendMessageToSocket } from "../edge-server";

async function sendMessage(req: any, res: Response) {
  try {
    const message = await MessageService.sendMessage({
      channelId: req.body.channelId,
      userId: req.user,
      message: req.body.message,
      time: req.body.time,
    });
    sendMessageToSocket(message);
    SuccessResponse.data = message;
    return res.status(StatusCodes.CREATED).json(SuccessResponse);
  } catch (error: any) {
    ErrorResponse.error = error;
    return res.status(error.statusCode).json(ErrorResponse);
  }
}

async function getAllMessages(req: Request, res: Response) {
  try {
    const messages = await MessageService.getAllMessages(req.params.channelId);
    SuccessResponse.data = messages;
    return res.status(StatusCodes.CREATED).json(SuccessResponse);
  } catch (error: any) {
    ErrorResponse.error = error;
    return res.status(error.statusCode).json(ErrorResponse);
  }
}

module.exports = {
  sendMessage,
  getAllMessages,
};

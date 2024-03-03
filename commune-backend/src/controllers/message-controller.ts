import { Request, Response } from "express";
import { sendMessageToSocket } from "../edge-server";
import { HandleIncomingMessage } from "../services";

export async function messageController(req: Request, res: Response) {
  const msg = req.body.msg;

  const response = await HandleIncomingMessage(msg);

  if(response) {
    sendMessageToSocket("yash", msg);
  } 

  res.sendStatus(200);
}

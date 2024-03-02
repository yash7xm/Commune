import { Request, Response } from "express";
import { sendMessageToSocket } from "../edge-server";


export function messageController(req: Request, res: Response) {
  sendMessageToSocket("yash", req.body.message);

  res.sendStatus(200);
}

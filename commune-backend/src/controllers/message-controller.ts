import { Request, Response } from "express";

export function messageController(req: Request, res: Response) {
  console.log(req.body.message);
  res.sendStatus(200);
}

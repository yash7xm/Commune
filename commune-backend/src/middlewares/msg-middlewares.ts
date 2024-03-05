const { ErrorResponse } = require("../utils/common");
import { Request, Response, NextFunction } from "express";
const { AppError } = require("../utils");
import { StatusCodes } from "http-status-codes";

const { UserService, MessageService } = require("../services");

async function checkUserExist(req: any, res: Response, next: NextFunction) {
  try {
    const user = await UserService.getUserByUsername(req.body.username);
    req.user2 = user;
    next();
  } catch (error: any) {
    return res.status(error.statusCode).json(error);
  }
}

async function checkChannelAlreadyExists(
  req: any,
  res: Response,
  next: NextFunction
) {
  try {
    const response = await MessageService.isChannel({
      user1: req.user,
      user2: req.user2,
    });
    if (!response) {
      next();
    }
  } catch (error: any) {
    return res.status(error.statusCode).json(error);
  }
}

module.exports = {
  checkUserExist,
  checkChannelAlreadyExists,
};

const { ErrorResponse } = require("../utils/common");
import { Request, Response, NextFunction } from "express";
const { AppError } = require("../utils");
import { StatusCodes } from "http-status-codes";

const { UserService } = require("../services");

function ValidateAuthRequest(req: Request, res: Response, next: NextFunction) {
  if (!req.body.name) {
    ErrorResponse.message = "Something went wrong while authenticating user";
    ErrorResponse.error = new AppError(
      ["Name not found in the incoming request in the correct form"],
      StatusCodes.BAD_REQUEST
    );
    return res.status(StatusCodes.BAD_REQUEST).json(ErrorResponse);
  }
  if (!req.body.username) {
    ErrorResponse.message = "Something went wrong while authenticating user";
    ErrorResponse.error = new AppError(
      ["Username not found in the incoming request in the correct form"],
      StatusCodes.BAD_REQUEST
    );
    return res.status(StatusCodes.BAD_REQUEST).json(ErrorResponse);
  }
  if (!req.body.password) {
    ErrorResponse.message = "Something went wrong while authenticating user";
    ErrorResponse.error = new AppError(
      ["password not found in the incoming request in the correct form"],
      StatusCodes.BAD_REQUEST
    );
    return res.status(StatusCodes.BAD_REQUEST).json(ErrorResponse);
  }
  next();
}

async function checkAuth(req: any, res: Response, next: NextFunction) {
  try {
    const response = await UserService.isAuthenticated(
      req.headers["x-access-token"]
    );
    if (response) {
      req.user = response; // setting the user id in the req object
      next();
    }
  } catch (error: any) {
    return res.status(error.statusCode).json(error);
  }
}

module.exports = {
  ValidateAuthRequest,
  checkAuth,
};

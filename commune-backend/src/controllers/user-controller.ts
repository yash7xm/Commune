const { UserService } = require("../services");
const { SuccessResponse, ErrorResponse } = require("../utils/common");
import { Request, Response } from "express";
import { StatusCodes } from "http-status-codes";

/**
 * POST : /signup
 * req-body {nams: 'abc', username: 'xyz', password: '1234'}
 */

async function signup(req: Request, res: Response) {
  console.log(req.body);
  try {
    const user = await UserService.create({
      name: req.body.name,
      username: req.body.username,
      password: req.body.password,
    });
    SuccessResponse.data = user;
    return res.status(StatusCodes.CREATED).json(SuccessResponse);
  } catch (error: any) {
    ErrorResponse.error = error;
    return res.status(error.statusCode).json(ErrorResponse);
  }
}

module.exports = {
  signup,
};

const { UserService } = require("../services");
const { SuccessResponse, ErrorResponse } = require("../utils/common");
import { Request, Response } from "express";

/**
 * POST : /signup
 * req-body {nams: 'abc', username: 'xyz', password: '1234'}
 */

async function signup(req: Request, res: Response) {
  try {
    const user = await UserService.create({
      email: req.body.email,
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

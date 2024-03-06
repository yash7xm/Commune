const { UserService } = require("../services");
const { SuccessResponse, ErrorResponse } = require("../utils/common");
import { Request, Response } from "express";
import { StatusCodes } from "http-status-codes";
const bcrypt = require("bcrypt");
const saltRounds = 10;

/**
 * POST : /signup
 * req-body {nams: 'abc', username: 'xyz', password: '1234'}
 */

async function signup(req: Request, res: Response) {
  try {
    const user = await UserService.create({
      name: req.body.name,
      username: req.body.username,
      password: bcrypt.hashSync(req.body.password, saltRounds),
    });
    SuccessResponse.data = user;
    return res.status(StatusCodes.CREATED).json(SuccessResponse);
  } catch (error: any) {
    ErrorResponse.error = error;
    return res.status(error.statusCode).json(ErrorResponse);
  }
}

async function signin(req: Request, res: Response) {
  try {
    const user = await UserService.signin({
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

async function getUser(req: any, res: Response) {
  try {
    const user = await UserService.getUser(req.user);
    SuccessResponse.data = user;
    return res.status(StatusCodes.OK).json(SuccessResponse);
  } catch (error) {
    ErrorResponse.error = error;
    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json(ErrorResponse);
  }
}

async function get(req: Request, res: Response) {
  try {
    const user = await UserService.get(req.params.id);
    SuccessResponse.data = user;
    return res.status(StatusCodes.OK).json(SuccessResponse);
  } catch (error) {
    ErrorResponse.error = error;
    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json(ErrorResponse);
  }
}

module.exports = {
  signup,
  signin,
  getUser,
  get
};

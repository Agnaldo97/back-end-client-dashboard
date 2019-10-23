import { NextFunction, Request, Response } from "express";
import { errorHandler } from "../../../domain/errors/Login";
import * as service from "../../../public/services/Auth";

export async function authenticate(
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> {
  try {
    const credentials: any = await service.login(req.body);
    res.status(200).json(credentials);
  } catch (err) {
    errorHandler(err, res, next);
  }
}

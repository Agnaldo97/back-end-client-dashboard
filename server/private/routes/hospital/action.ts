import { NextFunction, Request, Response } from "express";
import { errorHandler } from "../../../domain/errors/Login";
import * as service from "../../services/Hospital";


export async function listAllHospital(
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> {
  try {
    const response = await service.listAllHospital();
    res.status(200).json(response);
  } catch (err) {
    errorHandler(err, res, next);
  }
}
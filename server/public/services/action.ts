import { NextFunction, Request, Response } from "express";
import { errorHandler } from "../../domain/errors/Patient";
import * as service from "./Patient";

export async function findPatient(
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> {
  try {
    const patient: any = await service.findPatient(req.params.cpf);
    res.status(200).json(patient);
  } catch (err) {
    errorHandler(err, res, next);
  }
}

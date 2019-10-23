import { NextFunction, Request, Response } from "express";
import { errorHandler } from "../../../domain/errors/Login";
import * as service from "../../services/Attendance";


export async function listAllAttendance(
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> {
  try {
    const response = await service.listAllAttendance();
    res.status(200).json(response);
  } catch (err) {
    errorHandler(err, res, next);
  }
}

export async function updateCpfAttendance(
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> {
  try {
    await service.updateCpfAttendance(req.params.cpf);
    res.status(204).send();
  } catch (err) {
    errorHandler(err, res, next);
  }
}

export async function deleteAttendance(
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> {
  try {
    await service.deleteAttendance(req.params.cpf);
    res.status(202).send();
  } catch (err) {
    errorHandler(err, res, next);
  }
}

export async function updatePriorityAttendance(
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> {
  try {
    await service.updatePriorityAttendance(req.params.cpf, req.body);
    res.status(204).send();
  } catch (err) {
    errorHandler(err, res, next);
  }
}
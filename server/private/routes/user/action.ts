import { NextFunction, Request, Response } from "express";
import { errorHandler } from "../../../domain/errors/Login";
import * as service from "../../services/User";

export async function newUser(
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> {
  try {
    await service.create(req.body);
    res.status(201).send();
  } catch (err) {
    errorHandler(err, res, next);
  }
}

export async function listAllUsers(
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> {
  try {
    const response = await service.listAllUsers();
    res.status(200).json(response);
  } catch (err) {
    errorHandler(err, res, next);
  }
}

export async function deleteUser(
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> {
  try {
    await service.deleteUser(req.params.idUser);
    res.status(204).json();
  } catch (err) {
    errorHandler(err, res, next);
  }
}

export async function verifyEmail(
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> {
  try {
    await service.verifyEmail(req.params.email);
    res.status(201).send();
  } catch (err) {
    errorHandler(err, res, next);
  }
}

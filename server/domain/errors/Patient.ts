import { NextFunction, Response } from "express";

export function errorHandler(
  err: Error,
  res: Response,
  next: NextFunction
): any {
  switch (err.message) {
    case "patient-not-found":
      return res.status(400).send({ error_description: "Bad credentials" });
    case "two-attendances":
      return res.status(400).send({ error_description: "Is not possible more one attendance" });
    default:
      next(err);
  }
}

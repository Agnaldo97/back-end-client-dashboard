import { NextFunction, Response } from "express";

export function errorHandler(
  err: Error,
  res: Response,
  next: NextFunction
): any {
  switch (err.message) {
    case "user-not-found":
      return res.status(400).send({ error_description: "Bad credentials" });
    case "invalid-password":
      return res.status(400).send({ error_description: "Bad credentials" });
    case "password-not-reconigzed":
      return res.status(400).send({ error_description: "Bad credentials" });
    case "email-in-use":
      return res.status(400).send({ error_description: "Email in use" });
    default:
      next(err);
  }
}

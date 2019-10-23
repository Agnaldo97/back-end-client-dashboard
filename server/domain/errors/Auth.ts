import { NextFunction, Response } from "express";

export function errorHandler(
  err: Error,
  res: Response,
  next: NextFunction
): any {
  switch (err.message) {
    case "token-type-not-match":
      return res.status(401).send({ message: "Token não corresponde as credenciais." });
    case "token-expired":
      return res.status(401).send({ message: "Token expirou." });
    case "token-invalid":
      return res.status(401).send({ message: "Token inválido." });
    default:
      next(err);
  }
}

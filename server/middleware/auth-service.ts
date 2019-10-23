import * as jwt from "jsonwebtoken";
import * as config from "../config";
import { NextFunction, Request, Response } from "express";
import { ServiceError } from "../services/ServiceError";
import { errorHandler } from "../domain/errors/Auth";

export async function generateToken(data: any) {
  return await jwt.sign(data, config.SALT_KEY, { expiresIn: "365d" });
}

export async function decodeToken(
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> {
  try {
    if (req.method !== "OPTIONS") {
      const token =
        req.get("Authorization") ||
        `bearer ${req.query.t || req.body.authToken}`;
      if (!token) return next();
    }
    next();
  } catch (err) {
    errorHandler(err, res, next);
  }
}

export function verify(token: string): Promise<any> {
  return new Promise<any>((resolve, reject) => {
    jwt.verify(token, config.SALT_KEY, (err, decoded: any) => {
      if (err || !decoded) {
        return reject(resolveVerifyError(err));
      }
      resolve(decoded);
    });
  });
}

function resolveVerifyError(err: Error): ServiceError {
  if (!err) {
    return new ServiceError("token-type-not-match");
  }

  switch (err.name) {
    case "TokenExpiredError":
      return new ServiceError("token-expired");
    default:
      return new ServiceError("token-invalid");
  }
}

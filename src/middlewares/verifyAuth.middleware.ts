import { NextFunction, Request, Response } from "express";
import jwt from "jsonwebtoken";

export const verifyAuthMiddleware = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  let token = req.headers.authorization;

  if (!token) {
    return res.status(401).json({ message: "token invalid" });
  }

  token = token.split(" ")[1];

  jwt.verify(
    token,
    process.env.SECRET_KEY || "SECRET_KEY",
    (error, decoded: any) => {
      if (error) {
        return res.status(401).json({
          message: error.message,
        });
      }
      return next();
    }
  );
};

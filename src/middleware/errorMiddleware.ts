// src/middlewares/errorHandler.ts
import { Request, Response, NextFunction } from "express";
import { HttpError } from "http-errors";

export const errorHandler = (
  err: HttpError,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  return res.status(err.status || 500).json({
    success: false,
    message: err.message || "Internal server error",
  });
};

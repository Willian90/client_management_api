import { NextFunction, Request, Response } from "express";
import jwt from "jsonwebtoken";

export const generateToken = (data: object): string => {
  const token = jwt.sign(data, process.env.SECRET as string, {
    expiresIn: "1h",
  });
  return token;
};

export const authMiddleware = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const authHeader = req.headers.authorization;

  if (!authHeader) {
    res.status(401).json({ message: "Token required" });
    return;
  }
  const token = authHeader.split(" ")[1];

  try {
    const payload = jwt.verify(token as string, process.env.SECRET as string);
    //console.log(payload); // puedes tiparlo si quieres
    next();
  } catch (err) {
    res.status(403).json({ message: "Invalid or expired token" });
    return;
  }
};

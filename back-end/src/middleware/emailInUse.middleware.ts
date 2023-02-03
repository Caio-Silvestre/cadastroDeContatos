import { Request, Response, NextFunction } from "express";
import { AppDataSource } from "../data-source";
import { User } from "../entities/user.entity";

const emailMiddleware = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const users = AppDataSource.getRepository(User)
  const finUser = await users.findOneBy({email: req.user.email})
  if (!finUser) {
    return res.status(403).json({
      message: "Email is already registred",
    });
  }

  return next();
};

export default emailMiddleware;

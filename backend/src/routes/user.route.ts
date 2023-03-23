import { Router, NextFunction, Request, Response } from "express";
import UserService from "../services/user.service";
import { Routes } from "../interfaces/app.interface";

class UsersRoute implements Routes {
  public path = "/user";
  public router = Router();
  public usersService = new UserService();

  constructor() {
    this.initializeRoutes();
  }

  private initializeRoutes() {
    this.router.get(
      `${this.path}`,
      async (
        req: Request,
        res: Response,
        next: NextFunction
      ): Promise<void> => {
        res.send(this.usersService.listUsers());
      }
    );
  }
}

export default UsersRoute;

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

  private async initializeRoutes() {
    this.router.get(
      `${this.path}`,
      async (
        req: Request,
        res: Response,
        next: NextFunction
      ): Promise<void> => {
        const response = await this.usersService.listUsers();
        res.send(response);
      }
    );
  }
}

export default UsersRoute;

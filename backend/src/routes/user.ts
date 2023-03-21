import express, { Response } from "express";
import { ExpressRequest } from "../types/app";
const router = express.Router();

router.get("/", async (req: ExpressRequest, res: Response) => {
  const {
    context: { user },
  } = req.app;
  res.send(user.listUsers());
});

export default router;

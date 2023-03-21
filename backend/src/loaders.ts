import dotenv from "dotenv";
dotenv.config();

import User from "./services/user";
import { ExpressApp } from "./types/app";

async function setup(app: ExpressApp) {
  const user = User(app);
  return {
    user,
  };
}

export default setup;

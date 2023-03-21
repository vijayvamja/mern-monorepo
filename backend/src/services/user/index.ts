import UserService from "./user";
import { ExpressApp } from "src/types/app";

function loader(app: ExpressApp) {
  app.context.user = new UserService();
}

export default loader;

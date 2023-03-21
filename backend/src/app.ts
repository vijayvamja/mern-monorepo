import express, { Request, Response } from "express";
import bodyParser from "body-parser";

import loaders from "./loaders";
import routes from "./routes";
import { ExpressApp } from "./types/app";

async function main() {
  // express app
  const app: ExpressApp = express();
  app.context = {};
  await loaders(app);

  // TODO: apply middleware for cors

  // parse application/json
  app.use(bodyParser.urlencoded({ extended: false }));
  app.use(bodyParser.json());

  app.use("/", routes);
  app.get("/health", (req: Request, res: Response) => res.send("OK"));

  const PORT = process.env.PORT || 8080;
  app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}...`);
  });

  return app;
}
main();

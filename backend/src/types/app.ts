import { Application, Request } from "express";

export type ExpressApp = {
  context?: any;
} & Application;

export type ExpressRequest = Request & {
  app: ExpressApp;
};

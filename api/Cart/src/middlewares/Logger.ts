import {NextFunction, Request, Response} from "express";

export function Logger(req: Request, res: Response, next: NextFunction) {
  console.log("Logged request !")
  console.log(req.url, req.method, req.body, req.params, req.query)
  next();
}

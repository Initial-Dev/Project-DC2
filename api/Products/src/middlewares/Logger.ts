import { Request, Response, NextFunction } from "express";

export function Logger(req: Request, res: Response, next: NextFunction) {
    console.log("Logged request !")
    next();
}
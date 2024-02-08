import express from "express";
import { Request, Response } from "express";

export const Router = express.Router();

Router.get("/products", (req: Request, res: Response) => {
    res.send(`Get Products !`);
});

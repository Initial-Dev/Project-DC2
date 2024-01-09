import express from "express"
import { Request, Response } from "express";

export const Router = express.Router()

Router.get("/cart", (req: Request, res: Response) => {
    res.send(`Get Cart !`)
})

Router.post("/cart/:idItem", (req: Request<{idItem: number}>, res: Response) => {
    res.send(`You added item ${req.params.idItem} to your cart !`)
})

Router.delete("/cart/:idItem", (req: Request<{idItem: number}>, res: Response) => {
    res.send(`You removed item ${req.params.idItem} from your cart !`)
})


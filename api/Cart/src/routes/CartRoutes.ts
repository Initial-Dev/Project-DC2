import express from "express"
import { Request, Response } from "express";
import {getCart} from "../controllers";

export const Router = express.Router()

/**
 * Get all items in user's cart
 */
Router.get("/", getCart)

/**
 * Add item to user's cart
 */
Router.post("/:idItem", (req: Request<{idItem: number}>, res: Response) => {
    res.send(`You added item ${req.params.idItem} to your cart !`)
})

/**
 * Remove item from user's cart
 */
Router.delete("/:idItem", (req: Request<{idItem: number}>, res: Response) => {
    res.send(`You removed item ${req.params.idItem} from your cart !`)
})


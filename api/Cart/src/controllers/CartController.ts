import { Request, Response } from 'express';
import {getCartItems} from "../services";

export function getCart(req: Request, res: Response) {
    res.send(getCartItems());
}
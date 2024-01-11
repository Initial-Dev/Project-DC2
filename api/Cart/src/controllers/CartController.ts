import { Request, Response } from 'express';
import {getCartItems, addItemToCart} from "../services";

export async function getCart(req: Request, res: Response) {
    res.send(await getCartItems());
}

export async function addToCart(req: Request, res: Response) {
    res.send(await addItemToCart());
}
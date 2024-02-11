import {Request, Response} from 'express';
import {
  addItem,
  changeItemQuantity,
  cleanCart,
  getCartItems,
  getTotalPriceForUser,
  goToPayment,
  removeItem
} from "../services";

export async function getCartDetails(req: Request<{ idUser: number }>, res: Response) {
  try {
    if (!req.params.idUser) res.status(400).send("User ID is required");

    return res.status(200).send(await getCartItems(Number(req.params.idUser)));
  } catch (error: any) {
    res.status(500).send(error.message);
  }
}

export async function addItemToCart(req: Request<{ idItem: number, idUser: number, quantity: number }>, res: Response) {
  try {
    if (!req.body.idItem || !req.body.idUser || !req.body.quantity) res.status(400).send("Item ID, User ID and quantity are required");

    return res.status(201).send(await addItem(Number(req.body.idUser), Number(req.body.idItem), Number(req.body.quantity)));

  } catch (error: any) {
    res.status(500).send(error.message);
  }
}

export async function updateItemQuantity(req: Request<{ idItem: number, idUser: number }>, res: Response) {
  try {
    if (!req.body.idItem || !req.body.idUser || !req.body.quantity) res.status(400).send("Item ID, User ID and quantity are required");

    return res.status(200).send(await changeItemQuantity(Number(req.body.idUser), Number(req.body.idItem), Number(req.body.quantity)));
  } catch (error: any) {
    res.status(500).send(error.message);
  }
}

export async function removeItemFromCart(req: Request<{ idItem: number, idUser: number }>, res: Response) {
  try {
    if (!req.body.idItem || !req.body.idUser) res.status(400).send("Item ID and User ID are required");

    res.status(200).send(await removeItem(Number(req.body.idUser), Number(req.body.idItem)));
  } catch (error: any) {
    res.status(500).send(error.message);
  }
}

export async function emptyCart(req: Request<{ idUser: number }>, res: Response) {
  try {
    if (!req.body.idUser) res.status(400).send("User ID is required");

    res.status(200).send(await cleanCart(Number(req.body.idUser)));
  } catch (error: any) {
    res.status(500).send(error.message);
  }
}

export async function getCartTotalPrice(req: Request<{ idUser: number }>, res: Response) {
  try {
    if (!req.params.idUser) res.status(400).send("User ID is required");

    res.status(200).send(await getTotalPriceForUser(Number(req.params.idUser)));
  } catch (error: any) {
    res.status(500).send(error.message);
  }
}

export async function proceedToPayment(req: Request<{ idUser: number }>, res: Response) {
  try {
    if (!req.body.idUser) res.status(400).send("User ID is required");

    return res.status(200).send(await goToPayment(Number(req.body.idUser)));
  } catch (error: any) {
    res.status(500).send(error.message);
  }
}

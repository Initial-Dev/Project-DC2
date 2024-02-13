import express, {Request, Response} from "express"
import {
  addItemToCart,
  emptyCart,
  getCartDetails,
  getCartTotalPrice,
  proceedToPayment,
  removeItemFromCart,
  updateItemQuantity
} from "../controllers";

export const Router = express.Router()

/**
 * Get all items in user's cart
 */
Router.get("/:idUser", (req: Request<{ idUser: number }>, res: Response) => {
  return getCartDetails(req, res)
})

/**
 * Add item to user's cart
 */
Router.post("/", (req: Request<{ idItem: number, idUser: number, quantity: number }>, res: Response) => {
  return addItemToCart(req, res)
})

/**
 * Update item quantity in user's cart
 */
Router.put("/", (req: Request<{ idItem: number, idUser: number }>, res: Response) => {
  return updateItemQuantity(req, res)
})

/**
 * Remove item from user's cart
 */
Router.delete("/", (req: Request<{ idItem: number, idUser: number }>, res: Response) => {
  return removeItemFromCart(req, res)
})

/**
 * Empty user's cart
 */
Router.delete("/clean", (req: Request<{ idUser: number }>, res: Response) => {
  return emptyCart(req, res)
})

/**
 * Get user's cart total price
 */
Router.get("/total/:idUser", (req: Request<{ idUser: number }>, res: Response) => {
  return getCartTotalPrice(req, res)
})

/**
 * Proceed to payment
 */
Router.post("/payment", (req: Request<{ idUser: number }>, res: Response) => {
  return proceedToPayment(req, res)
})

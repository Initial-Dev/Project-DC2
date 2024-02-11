import express from "express"
import {listProducts, getProductByIdController, createProductController} from "../controllers";

export const productRouter = express.Router()

productRouter.get("/", listProducts);
productRouter.get("/:id", getProductByIdController);
productRouter.post("/", createProductController);

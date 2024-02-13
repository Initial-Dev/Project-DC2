import express from "express"
import {listProducts, getProductByIdController, createProductController, updateProductController} from "../controllers";

export const productRouter = express.Router()

productRouter.get("/", listProducts);
productRouter.get("/:id", getProductByIdController);
productRouter.post("/", createProductController);
productRouter.put("/:productId", updateProductController);
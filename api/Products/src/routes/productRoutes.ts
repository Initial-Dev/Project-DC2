import express from "express"
import {listProducts, createProductController} from "../controllers";

export const productRouter = express.Router()

productRouter.get("/", listProducts)
productRouter.post("/", createProductController);

import express from "express"
import {listProducts} from "../controllers";

export const productRouter = express.Router()

productRouter.get("/", listProducts)
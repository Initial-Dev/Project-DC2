import express from "express"
import {listProducts, getProductByIdController, createProductController, updateProductController, uploadImageController, createProductWithImageController, getImage} from "../controllers";
import multer from "multer";

export const productRouter = express.Router()

productRouter.get("/", listProducts);
productRouter.get("/:id", getProductByIdController);
productRouter.post("/", createProductController);
productRouter.put("/:productId", updateProductController);

const upload = multer({dest: '/usr/local/products/uploads'});
productRouter.post("/upload", upload.single('image'), uploadImageController);
productRouter.post("/create-with-image", upload.single('image'), createProductWithImageController);
productRouter.get("/uploads/:imageName", getImage);
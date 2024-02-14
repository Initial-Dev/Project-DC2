import express from "express"
import {
  createProductController,
  getImage,
  getProductByIdController,
  getProductsByBrandController,
  getProductsController,
  searchProductsController,
  updateProductController,
  uploadImageController
} from "../controllers";
import multer from "multer";

export const productRouter = express.Router()

productRouter.get("/", getProductsController);
productRouter.get("/:id", getProductByIdController);
productRouter.get("/brand/:brand", getProductsByBrandController);
productRouter.get("/search", searchProductsController);
productRouter.post("/", createProductController);
productRouter.put("/:productId", updateProductController);

const upload = multer({dest: '/usr/local/products/uploads'});
productRouter.post("/upload", upload.single('image'), uploadImageController);
productRouter.get("/uploads/:imageName", getImage);

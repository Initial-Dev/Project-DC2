import { Request, Response } from "express";
import { getProducts, createProduct } from "../services/ProductServices";

export async function listProducts(req: Request, res: Response) {
  try {
    const products = await getProducts();
    res.json(products);
  } catch (error) {
    console.error("Error listing products:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

export async function createProductController(req: Request, res: Response) {
  
  const { name, description, image, price } = req.body;

  try {
    const newProduct = await createProduct({ name, description, image, price });
    res.status(201).json(newProduct);
  } catch (error) {
    console.error("Error creating product:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};
import { Request, Response } from "express";
import { getProducts, getProductById, createProduct} from "../services/ProductServices";

export async function listProducts(req: Request, res: Response) {
  try {
    const products = await getProducts();
    res.json(products);
  } catch (error) {
    console.error("Error listing products:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

export async function getProductByIdController(req: Request, res: Response) {
  const productId = parseInt(req.params.id);

  try {
    const product = await getProductById(productId);
    if (!product) {
      return res.status(404).json({ error: 'Product not found' });
    }
    res.json(product);
  } catch (error) {
    console.error('Error fetching product by ID:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

export async function createProductController(req: Request, res: Response) {
  try {
    // Extraire les données de la requête
    const { name, description, image, price, categoryId } = req.body;

    // Débogage : Afficher les données reçues du client
    console.log('name:', name);
    console.log('description:', description);
    console.log('image:', image);
    console.log('price:', price);
    console.log('categoryId:', categoryId);

    // Appeler le service pour créer le produit
    const newProduct = await createProduct({
      
      name, 
      description, 
      image, 
      price: parseFloat(price), // Convertir la chaîne de caractères en nombre
      categoryId: parseInt(categoryId, 10)
    
    });

    // Répondre avec le nouveau produit créé
    res.status(201).json(newProduct);
  } catch (error) {
    console.error('Error creating product:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
}

/*async function createProductController(name: string, description: string, image: string, price: number, categoryId?: number) {
  try {
    const newProduct = await prisma.product.create({
      data: {
        name,
        description,
        image,
        price,
        categoryId,
      },
    });
    return newProduct;
  } catch (error) {
    console.error('Error creating product:', error);
    throw error;
  }
}*/

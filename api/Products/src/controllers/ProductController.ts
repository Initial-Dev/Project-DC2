import { Request, Response } from "express";
import { getProducts, getProductById, createProduct, updateProduct, uploadImage} from "../services/ProductServices";

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

export async function updateProductController(req: Request, res: Response) {
  try {
    // Extraire l'ID du produit et les données mises à jour de la requête
    const productId = parseInt(req.params.productId);
    const updatedData = req.body;

    // Appeler la fonction pour mettre à jour le produit
    const updatedProduct = await updateProduct(productId, updatedData);

    // Répondre avec le produit mis à jour
    res.status(200).json(updatedProduct);
  } catch (error) {
    console.error('Error updating product:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
}

export async function uploadImageController(req: Request, res: Response) {
  try {
      if (!req.file) {
          return res.status(400).send('Aucune image n\'a été téléchargée.');
      }
      const imageUrl = await uploadImage(req.file);
      res.status(200).send(imageUrl);
  } catch (error) {
      console.error('Erreur lors du téléchargement de l\'image :', error);
      res.status(500).json({ error: 'Erreur interne du serveur' });
  }
}

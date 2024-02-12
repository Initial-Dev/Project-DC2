import express from 'express';
import { ProductController } from '../controllers/ProductController';

const router = express.Router();

// Route pour créer un nouveau produit
router.post('/', ProductController.createProduct);

// Route pour obtenir les détails d'un produit par son ID
router.get('/:productId', ProductController.getProductById);

// Route pour mettre à jour un produit
router.put('/:productId', ProductController.updateProduct);

// Route pour supprimer un produit
router.delete('/:productId', ProductController.deleteProduct);

// Route pour obtenir tous les produits
router.get('/', ProductController.getAllProducts);

// Route pour rechercher des produits par nom
router.get('/search', ProductController.searchProductsByName);

export default router;

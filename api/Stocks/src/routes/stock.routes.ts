import express, { Request, Response } from 'express';
import { StockController } from '../controllers/StockController';

export const router = express.Router();

// Route pour mettre à jour la quantité de stock
router.post('/updateStockQuantity', StockController.updateStockQuantity);

// Route pour obtenir les détails du stock d'un produit spécifique
router.get('/getStockDetails/:productId', StockController.getStockDetails);

// Route pour lister tous les produits dont le stock est en dessous du seuil de réapprovisionnement
router.get(
	'/listProductsBelowThreshold',
	StockController.listProductsBelowReorderThreshold
);

// Route pour obtenir toutes les notifications de réapprovisionnement pour un stock spécifique
router.get(
	'/getAllNotifications/:stockId',
	StockController.getAllReplenishmentNotifications
);

// Route pour supprimer une notification de réapprovisionnement
router.delete(
	'/deleteNotification/:notificationId',
	StockController.deleteReplenishmentNotification
);

export default router;

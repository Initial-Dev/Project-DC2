import express from 'express';
import { StockController } from '../controllers/StockController';

const router = express.Router();

// Route pour créer une nouvelle entrée de stock
router.post('/createStock', StockController.createStock);

// Route mise à jour pour refléter la méthode correcte de mise à jour d'une entrée de stock
router.post('/updateStockEntry', StockController.updateStockEntry);

// Mise à jour de la route pour obtenir les détails d'une entrée de stock spécifique (ajustement pour utiliser stockId au lieu de productId)
router.get(
	'/getStockEntryDetails/:stockId',
	StockController.getStockEntryDetails
);

// Route pour lister toutes les entrées de stock en dessous du seuil de réapprovisionnement
router.get(
	'/listStockEntriesBelowReorderThreshold',
	StockController.listStockEntriesBelowReorderThreshold
);

// Route pour obtenir toutes les notifications de réapprovisionnement pour une entrée de stock spécifique
router.get(
	'/getAllReplenishmentNotifications/:stockId',
	StockController.getAllReplenishmentNotifications
);

// Route pour supprimer une notification de réapprovisionnement
router.delete(
	'/deleteReplenishmentNotification/:notificationId',
	StockController.deleteReplenishmentNotification
);

export default router;

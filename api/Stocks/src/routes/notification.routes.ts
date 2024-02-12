import express from 'express';
import { ReplenishmentNotificationController } from '../controllers/ReplenishmentNotificationController';

const router = express.Router();

// Récupérer toutes les notifications pour un stock spécifique
router.get(
	'/stock/:stockId',
	ReplenishmentNotificationController.getNotifications
);

// Créer une nouvelle notification de réapprovisionnement
router.post('/', ReplenishmentNotificationController.createNotification);

// Supprimer une notification de réapprovisionnement spécifique
router.delete(
	'/:notificationId',
	ReplenishmentNotificationController.deleteNotification
);

// Récupérer toutes les notifications, indépendamment du stock
router.get('/all', ReplenishmentNotificationController.getAllNotifications);

// Rechercher des notifications par message
router.get(
	'/search',
	ReplenishmentNotificationController.searchNotificationsByMessage
);

export default router;

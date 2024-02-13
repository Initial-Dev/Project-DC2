import express from 'express';
import { StockController } from '../controllers/StockController';

const router = express.Router();

/**
 * @swagger
 * /createStock:
 *   post:
 *     summary: Create a new stock entry
 *     tags: [Stock]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - productId
 *               - color
 *               - size
 *               - quantity
 *               - reorderThreshold
 *             properties:
 *               productId:
 *                 type: integer
 *               color:
 *                 type: integer
 *               size:
 *                 type: integer
 *               quantity:
 *                 type: integer
 *               reorderThreshold:
 *                 type: integer
 *     responses:
 *       201:
 *         description: Stock entry created successfully
 *       400:
 *         description: Bad request
 */
router.post('/createStock', StockController.createStock);

/**
 * @swagger
 * /updateStockEntry:
 *   put:
 *     summary: Update a stock entry
 *     tags: [Stock]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - stockId
 *               - quantity
 *             properties:
 *               stockId:
 *                 type: integer
 *               quantity:
 *                 type: integer
 *     responses:
 *       200:
 *         description: Stock entry updated successfully
 *       404:
 *         description: Stock entry not found
 */
router.put('/updateStockEntry', StockController.updateStockEntry);

/**
 * @swagger
 * /getStockEntryDetails/{stockId}:
 *   get:
 *     summary: Get details of a specific stock entry
 *     tags: [Stock]
 *     parameters:
 *       - in: path
 *         name: stockId
 *         schema:
 *           type: integer
 *         required: true
 *         description: ID of the stock entry to get details for
 *     responses:
 *       200:
 *         description: Details of stock entry
 *       404:
 *         description: Stock entry not found
 */
router.get(
	'/getStockEntryDetails/:stockId',
	StockController.getStockEntryDetails
);

/**
 * @swagger
 * /listStockEntriesBelowReorderThreshold:
 *   get:
 *     summary: List all stock entries below their reorder threshold
 *     tags: [Stock]
 *     responses:
 *       200:
 *         description: List of stock entries below reorder threshold
 */
router.get(
	'/listStockEntriesBelowReorderThreshold',
	StockController.listStockEntriesBelowReorderThreshold
);

/**
 * @swagger
 * /getAllReplenishmentNotifications/{stockId}:
 *   get:
 *     summary: Get all replenishment notifications for a specific stock entry
 *     tags: [Notifications]
 *     parameters:
 *       - in: path
 *         name: stockId
 *         schema:
 *           type: integer
 *         required: true
 *         description: ID of the stock entry to get notifications for
 *     responses:
 *       200:
 *         description: An array of replenishment notifications
 *       404:
 *         description: Stock entry not found
 */
router.get(
	'/getAllReplenishmentNotifications/:stockId',
	StockController.getAllReplenishmentNotifications
);

/**
 * @swagger
 * /getAllNotifications:
 *   get:
 *     summary: Get all existing replenishment notifications
 *     tags: [Notifications]
 *     responses:
 *       200:
 *         description: A list of all replenishment notifications
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   id:
 *                     type: integer
 *                     description: The notification ID
 *                   stockId:
 *                     type: integer
 *                     description: The associated stock entry ID
 *                   message:
 *                     type: string
 *                     description: The notification message
 *                   createdAt:
 *                     type: string
 *                     format: date-time
 *                     description: The time at which the notification was created
 *       404:
 *         description: Not found
 */
router.get('/getAllNotifications', StockController.getAllNotifications);

/**
 * @swagger
 * /deleteReplenishmentNotification/{notificationId}:
 *   delete:
 *     summary: Delete a replenishment notification
 *     tags: [Notifications]
 *     parameters:
 *       - in: path
 *         name: notificationId
 *         schema:
 *           type: integer
 *         required: true
 *         description: ID of the notification to delete
 *     responses:
 *       200:
 *         description: Notification deleted successfully
 *       404:
 *         description: Notification not found
 */
router.delete(
	'/deleteReplenishmentNotification/:notificationId',
	StockController.deleteReplenishmentNotification
);

/**
 * @swagger
 * /deleteStock/{stockId}:
 *   delete:
 *     summary: Delete a specific stock entry
 *     tags: [Stock]
 *     parameters:
 *       - in: path
 *         name: stockId
 *         schema:
 *           type: integer
 *         required: true
 *         description: The ID of the stock entry to delete
 *     responses:
 *       200:
 *         description: Stock entry deleted successfully
 *       404:
 *         description: Stock entry not found
 */
router.delete('/deleteStock/:stockId', StockController.deleteStock);

export default router;

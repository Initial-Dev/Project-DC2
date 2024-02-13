import { Request, Response } from 'express';
import { StockService } from '../services/StockService';

const stockService = new StockService();

export class StockController {
	static async createStock(req: Request, res: Response) {
		try {
			const { productId, color, size, quantity, reorderThreshold } =
				req.body;
			const newStock = await stockService.createStock(
				productId,
				color,
				size,
				quantity,
				reorderThreshold
			);
			res.status(201).json(newStock);
		} catch (error) {
			if (error instanceof Error) {
				res.status(500).json({ message: error.message });
			} else {
				res.status(500).json({ message: 'An unknown error occurred' });
			}
		}
	}

	// Mise à jour de la quantité de stock pour une entrée spécifique
	static async updateStockEntry(req: Request, res: Response) {
		const { stockId, quantity } = req.body;
		try {
			// Mise à jour de l'entrée de stock
			const updatedStockEntry = await stockService.updateStockEntry(
				stockId,
				quantity
			);

			// Vérification immédiate pour voir si le stock est en dessous du seuil de réapprovisionnement
			await stockService.checkReorderThreshold(stockId);

			// Renvoi de l'entrée de stock mise à jour comme réponse
			res.json(updatedStockEntry);
		} catch (error) {
			if (error instanceof Error) {
				res.status(500).json({ message: error.message });
			} else {
				res.status(500).json({ message: 'An unknown error occurred' });
			}
		}
	}

	// Liste des entrées de stock en dessous du seuil de réapprovisionnement
	static async listStockEntriesBelowReorderThreshold(
		req: Request,
		res: Response
	) {
		try {
			const entriesBelowThreshold =
				await stockService.listStockEntriesBelowReorderThreshold();
			res.json(entriesBelowThreshold);
		} catch (error) {
			if (error instanceof Error) {
				res.status(500).json({ message: error.message });
			} else {
				res.status(500).json({ message: 'An unknown error occurred' });
			}
		}
	}

	// Récupération de toutes les notifications de réapprovisionnement pour une entrée de stock spécifique
	static async getAllReplenishmentNotifications(req: Request, res: Response) {
		const { stockId } = req.params;
		try {
			const notifications =
				await stockService.getAllReplenishmentNotifications(
					parseInt(stockId)
				);
			res.json(notifications);
		} catch (error) {
			if (error instanceof Error) {
				res.status(500).json({ message: error.message });
			} else {
				res.status(500).json({ message: 'An unknown error occurred' });
			}
		}
	}

	// Suppression d'une notification de réapprovisionnement
	static async deleteReplenishmentNotification(req: Request, res: Response) {
		const { notificationId } = req.params;
		try {
			const result = await stockService.deleteReplenishmentNotification(
				parseInt(notificationId)
			);
			res.json({ message: 'Notification deleted successfully', result });
		} catch (error) {
			if (error instanceof Error) {
				res.status(500).json({ message: error.message });
			} else {
				res.status(500).json({ message: 'An unknown error occurred' });
			}
		}
	}
	// Récupération des détails d'une entrée de stock spécifique
	static async getStockEntryDetails(req: Request, res: Response) {
		const { stockId } = req.params;
		try {
			const stockDetails = await stockService.getStockEntryDetails(
				parseInt(stockId)
			);
			if (stockDetails) {
				res.json(stockDetails);
			} else {
				res.status(404).json({ message: 'Stock entry not found' });
			}
		} catch (error) {
			if (error instanceof Error) {
				res.status(500).json({ message: error.message });
			} else {
				res.status(500).json({ message: 'An unknown error occurred' });
			}
		}
	}

	// Supprimer une entrée de stock
	static async deleteStock(req: Request, res: Response) {
		try {
			const stockId = parseInt(req.params.stockId);
			await stockService.deleteStock(stockId);
			res.status(200).json({
				message: 'Stock entry deleted successfully',
			});
		} catch (error) {
			if (error instanceof Error) {
				res.status(500).json({ message: error.message });
			} else {
				res.status(500).json({ message: 'An unknown error occurred' });
			}
		}
	}
}

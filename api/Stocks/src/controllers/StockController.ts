import { Request, Response } from 'express';
import { StockService } from '../services/StockService';

const stockService = new StockService();

export class StockController {
	static async updateStockQuantity(req: Request, res: Response) {
		try {
			const { productId, quantity } = req.body;
			const result = await stockService.updateStockQuantity(
				productId,
				quantity
			);
			res.json(result);
		} catch (error) {
			if (error instanceof Error) {
				res.status(500).json({ message: error.message });
			} else {
				res.status(500).json({ message: 'An unknown error occurred' });
			}
		}
	}

	static async getStockDetails(req: Request, res: Response) {
		try {
			const { productId } = req.params;
			const result = await stockService.getStockDetails(
				parseInt(productId)
			);
			res.json(result);
		} catch (error) {
			if (error instanceof Error) {
				res.status(500).json({ message: error.message });
			} else {
				res.status(500).json({ message: 'An unknown error occurred' });
			}
		}
	}

	static async listProductsBelowReorderThreshold(
		req: Request,
		res: Response
	) {
		try {
			const result =
				await stockService.listProductsBelowReorderThreshold();
			res.json(result);
		} catch (error) {
			if (error instanceof Error) {
				res.status(500).json({ message: error.message });
			} else {
				res.status(500).json({ message: 'An unknown error occurred' });
			}
		}
	}

	static async getAllReplenishmentNotifications(req: Request, res: Response) {
		try {
			const { stockId } = req.params;
			const result = await stockService.getAllReplenishmentNotifications(
				parseInt(stockId)
			);
			res.json(result);
		} catch (error) {
			if (error instanceof Error) {
				res.status(500).json({ message: error.message });
			} else {
				res.status(500).json({ message: 'An unknown error occurred' });
			}
		}
	}

	static async deleteReplenishmentNotification(req: Request, res: Response) {
		try {
			const { notificationId } = req.params;
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
}

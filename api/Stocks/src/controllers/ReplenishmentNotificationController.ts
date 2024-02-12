import { Request, Response } from 'express';
import { ReplenishmentNotificationService } from '../services/ReplenishmentNotificationService';

const notificationService = new ReplenishmentNotificationService();

export class ReplenishmentNotificationController {
	static async getNotifications(req: Request, res: Response) {
		const { stockId } = req.params;
		try {
			const notifications = await notificationService.getNotifications(
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

	static async createNotification(req: Request, res: Response) {
		const { stockId, message } = req.body;
		try {
			const notification = await notificationService.createNotification(
				stockId,
				message
			);
			res.status(201).json(notification);
		} catch (error) {
			if (error instanceof Error) {
				res.status(500).json({ message: error.message });
			} else {
				res.status(500).json({ message: 'An unknown error occurred' });
			}
		}
	}

	static async deleteNotification(req: Request, res: Response) {
		const { notificationId } = req.params;
		try {
			const result = await notificationService.deleteNotification(
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

	static async getAllNotifications(req: Request, res: Response) {
		try {
			const notifications =
				await notificationService.getAllNotifications();
			res.json(notifications);
		} catch (error) {
			if (error instanceof Error) {
				res.status(500).json({ message: error.message });
			} else {
				res.status(500).json({ message: 'An unknown error occurred' });
			}
		}
	}

	static async searchNotificationsByMessage(req: Request, res: Response) {
		const { message } = req.query;
		if (typeof message !== 'string') {
			return res.status(400).json({
				message:
					'Message query parameter is required and must be a string',
			});
		}
		try {
			const notifications =
				await notificationService.searchNotificationsByMessage(message);
			res.json(notifications);
		} catch (error) {
			if (error instanceof Error) {
				res.status(500).json({ message: error.message });
			} else {
				res.status(500).json({ message: 'An unknown error occurred' });
			}
		}
	}
}

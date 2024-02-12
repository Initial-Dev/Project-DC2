import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export class ReplenishmentNotificationService {
	async getNotifications(stockId: number) {
		return await prisma.replenishmentNotification.findMany({
			where: { stockId },
		});
	}

	//Créer une notification
	async createNotification(stockId: number, message: string) {
		return await prisma.replenishmentNotification.create({
			data: {
				stockId,
				message,
			},
		});
	}
	//Supprimer une notification
	async deleteNotification(notificationId: number) {
		return await prisma.replenishmentNotification.delete({
			where: { id: notificationId },
		});
	}

	// Récuperer toutes les notifications
	async getAllNotifications() {
		return await prisma.replenishmentNotification.findMany({});
	}

	// Méthode pour récupérer les notifications par un critère de recherche spécifique, comme le message
	async searchNotificationsByMessage(message: string) {
		return await prisma.replenishmentNotification.findMany({
			where: {
				message: {
					contains: message,
					mode: 'insensitive', // Recherche insensible à la casse
				},
			},
		});
	}
}

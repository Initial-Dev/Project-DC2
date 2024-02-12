import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export class StockService {
	async updateStockQuantity(productId: number, quantity: number) {
		return await prisma.stock.update({
			where: { productId },
			data: { quantity },
		});
	}

	async checkReorderThreshold(productId: number) {
		const stock = await prisma.stock.findUnique({
			where: { productId },
		});

		if (stock && stock.quantity <= stock.reorderThreshold) {
			// Logique pour envoyer une notification
			await this.createReplenishmentNotification(
				stock.id,
				`Stock for product ${productId} is low.`
			);
		}
	}

	async createReplenishmentNotification(stockId: number, message: string) {
		return await prisma.replenishmentNotification.create({
			data: {
				stockId,
				message,
			},
		});
	}

	async getStockDetails(productId: number) {
		return await prisma.stock.findUnique({
			where: { productId },
			include: { product: true }, // Inclure les détails du produit associé
		});
	}

	async listProductsBelowReorderThreshold() {
		const allStocks = await prisma.stock.findMany({
			include: { product: true },
		});
		return allStocks.filter(
			(stock) => stock.quantity <= stock.reorderThreshold
		);
	}

	async getAllReplenishmentNotifications(stockId: number) {
		return await prisma.replenishmentNotification.findMany({
			where: { stockId },
			orderBy: { createdAt: 'desc' }, // Ordonner par date de création, du plus récent au plus ancien
		});
	}

	// Méthode pour supprimer une notification (optionnel)
	async deleteReplenishmentNotification(notificationId: number) {
		return await prisma.replenishmentNotification.delete({
			where: { id: notificationId },
		});
	}

	// Méthode pour vérifier et mettre à jour tous les stocks en dessous du seuil
	async checkAndUpdateAllStocksBelowThreshold() {
		const stocksBelowThreshold =
			await this.listProductsBelowReorderThreshold();
		for (const stock of stocksBelowThreshold) {
			// Notifications
			console.log(
				`Stock for product ${stock.productId} is below threshold.`
			);
			// Notifications pour chaque produit
			await this.createReplenishmentNotification(
				stock.id,
				`Stock for product ${stock.productId} is below threshold. Consider replenishing soon.`
			);
		}
	}
}

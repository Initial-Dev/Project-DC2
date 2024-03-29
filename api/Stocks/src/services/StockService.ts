import { PrismaClient, Stock } from '@prisma/client';

const prisma = new PrismaClient();

export class StockService {
	//créer un stock
	async createStock(
		productId: number,
		color: number,
		size: number,
		quantity: number,
		reorderThreshold: number
	) {
		// Recherche d'un stock existant avec le même productId, color, et size
		const existingStock = await prisma.stock.findFirst({
			where: {
				productId: productId,
				color: color,
				size: size,
			},
		});

		// Si un stock existant est trouvé, renvoie une erreur ou un message
		if (existingStock) {
			throw new Error(
				'Stock with the given productId, color, and size already exists.'
			);
		}

		// Si aucun stock existant n'est trouvé, crée un nouveau stock
		return await prisma.stock.create({
			data: {
				productId: productId,
				color: color,
				size: size,
				quantity: quantity,
				reorderThreshold: reorderThreshold,
			},
		});
	}

	// Mise à jour de la quantité de stock pour une entrée spécifique
	async updateStockEntry(stockId: number, quantity: number) {
		return await prisma.stock.update({
			where: { id: stockId },
			data: { quantity },
		});
	}

	// Création d'une notification de réapprovisionnement
	async createReplenishmentNotification(stockId: number, message: string) {
		return await prisma.replenishmentNotification.create({
			data: {
				stockId,
				message,
			},
		});
	}

	// Vérification si le stock d'une entrée spécifique est en dessous du seuil de réapprovisionnement
	async checkReorderThreshold(stockId: number) {
		const stockEntry = await prisma.stock.findUnique({
			where: { id: stockId },
		});

		if (stockEntry && stockEntry.quantity <= stockEntry.reorderThreshold) {
			await this.createReplenishmentNotification(
				stockId,
				`Stock for stock entry ${stockId} is low.`
			);
		}
	}

	// Récupération des détails d'une entrée de stock spécifique
	async getStockEntryDetails(stockId: number) {
		return await prisma.stock.findUnique({
			where: { id: stockId },
		});
	}

	// Liste de toutes les entrées de stock en dessous de leur seuil de réapprovisionnement
	async listStockEntriesBelowReorderThreshold(): Promise<Stock[]> {
		const allStocks = await prisma.stock.findMany();
		return allStocks.filter(
			(stock: Stock) => stock.quantity <= stock.reorderThreshold
		);
	}

	// Récupération de toutes les notifications de réapprovisionnement pour une entrée de stock spécifique
	async getAllReplenishmentNotifications(stockId: number) {
		return await prisma.replenishmentNotification.findMany({
			where: { stockId },
			orderBy: { createdAt: 'desc' },
		});
	}
	// Récupération de toutes les notifications de réapprovisionnement
	async getAllNotifications() {
		return await prisma.replenishmentNotification.findMany({
			orderBy: {
				createdAt: 'desc',
			},
		});
	}

	// Suppression d'une notification de réapprovisionnement
	async deleteReplenishmentNotification(notificationId: number) {
		return await prisma.replenishmentNotification.delete({
			where: { id: notificationId },
		});
	}

	// Suppression d'une entrée de stock
	async deleteStock(stockId: number) {
		return await prisma.stock.delete({
			where: { id: stockId },
		});
	}
}

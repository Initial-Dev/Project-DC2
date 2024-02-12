import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export class ProductService {
	async createProduct(name: string, description: string, price: number) {
		return await prisma.product.create({
			data: {
				name,
				description,
				price,
			},
		});
	}

	async getProductById(productId: number) {
		return await prisma.product.findUnique({
			where: { id: productId },
			include: { stock: true },
		});
	}

	async updateProduct(
		productId: number,
		name?: string,
		description?: string,
		price?: number
	) {
		const data: any = {};
		if (name !== undefined) data.name = name;
		if (description !== undefined) data.description = description;
		if (price !== undefined) data.price = price;

		return await prisma.product.update({
			where: { id: productId },
			data,
		});
	}

	async deleteProduct(productId: number) {
		return await prisma.product.delete({
			where: { id: productId },
		});
	}

	async getAllProducts() {
		return await prisma.product.findMany({
			include: { stock: true },
		});
	}

	// Méthode pour rechercher des produits par nom
	async searchProductsByName(name: string) {
		return await prisma.product.findMany({
			where: {
				name: {
					contains: name,
					mode: 'insensitive', // Recherche insensible à la casse
				},
			},
			include: { stock: true },
		});
	}
}

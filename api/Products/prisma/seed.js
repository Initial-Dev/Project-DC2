const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function seed() {
	try {
		// Insérer des produits
		await prisma.product.createMany({
			data: [
				{
					name: 'Nike Air Dunk Jumbo',
					description: 'Chaussure pour homme',
					image: 'https://image.goat.com/attachments/product_template_pictures/images/097/856/562/original/FJ1566_101.png.png',
					price: 129,
				},
				{
					name: 'adidas Campus 00s',
					description: 'Chaussure pour homme',
					image: '/home/dell/BSP/api/images/item2.jpg',
					price: 130,
				},
				{
					name: 'Nike Tuned 1 Utility',
					description: 'Chaussure pour homme',
					image: '/home/dell/BSP/api/images/item3.jpg',
					price: 199,
				},
				{
					name: 'Jordan 1 Zoom Air CMFT',
					description: 'Chaussure pour homme',
					image: '/home/dell/BSP/api/images/item4.jpg',
					price: 169,
				},
				{
					name: 'New Balance 530',
					description: 'Chaussure pour femme',
					image: '/home/dell/BSP/api/images/item5.jpg',
					price: 100,
				},

				{
					name: 'ON Cloudtilt',
					description: 'Chaussure pour homme',
					image: '/home/dell/BSP/api/images/item6.jpg',
					price: 169,
				},
				{
					name: 'Converse Run Star Legacy CX Platform High',
					description: 'Chaussure pour femme',
					image: '/home/dell/BSP/api/images/item7.jpg',
					price: 129,
				},
				{
					name: 'Nike Air Max Pulse',
					description: 'Chaussure pour femme',
					image: '/home/dell/BSP/api/images/item8.jpg',
					price: 159,
				},
			],
		});

		console.log('Données insérées avec succès!');
	} catch (error) {
		console.error("Erreur lors de l'insertion des données:", error);
	} finally {
		await prisma.$disconnect(); // Déconnectez Prisma une fois que les opérations sont terminées
	}
}

seed();

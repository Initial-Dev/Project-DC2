const {PrismaClient} = require('@prisma/client');
const prisma = new PrismaClient();

async function seed() {
    try {
        // Insérer des produits
        /*await prisma.product.createMany({
            data: [],
        });*/

        console.log('Données insérées avec succès!');
    } catch (error) {
        console.error('Erreur lors de l\'insertion des données:', error);
    } finally {
        await prisma.$disconnect(); // Déconnectez Prisma une fois que les opérations sont terminées
    }
}

seed();

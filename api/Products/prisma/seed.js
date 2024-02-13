/*const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function seed() {
  try {
    // Insérer des produits
    await prisma.product.createMany({
      data: [
        {
          name: 'Dunk low retro',
          description: 'Pariez sur les lignes urbaines indémodables des sneakers Nike Dunk Low Grey Fog',
          image: '/home/dell/BSP/api/images/NikeDunkLowRetro.avif',
          price: 130,
        },
        {
          name: 'Adidas Samba',
          description: 'Née sur les terrains de football, la Samba est désormais une icône streetwear intemporelle',
          image: '/home/dell/BSP/api/images/AdidasSamba.avif',
          price: 120,
        },
      ],
    });

    console.log('Données insérées avec succès!');
  } catch (error) {
    console.error('Erreur lors de l\'insertion des données:', error);
  } finally {
    await prisma.$disconnect(); // Déconnectez Prisma une fois que les opérations sont terminées
  }
}

seed();*/

import { PrismaClient } from "@prisma/client";
import path from "path";
import fs from "fs/promises";

const prisma = new PrismaClient();

export async function getProducts() {
  return prisma.product.findMany();
}

export async function createProduct(productData: { name: string, description: string, image: string, price: number }) {
  // Générer un chemin unique pour l'image sur le disque
  const imageName = `${Date.now()}_${productData.name.replace(/\s+/g, "_")}.jpg`;
  const imagePath = path.join(__dirname, "/home/dell/BSP/api/images", imageName);

  // Copier l'image depuis productData.image vers le chemin local imagePath
  // Assurez-vous que le répertoire de destination existe
  await fs.copyFile(productData.image, imagePath);

  // Enregistrez le produit dans la base de données avec le chemin local de l'image
  
  return prisma.product.create({
    data: {
      name: productData.name,
      description: productData.description,
      image: imagePath,
      price: productData.price,
    },
  });
}
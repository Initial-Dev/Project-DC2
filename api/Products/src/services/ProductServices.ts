import { Prisma, PrismaClient, Product } from "@prisma/client";

const prisma = new PrismaClient();

export async function getProducts() {
  return prisma.product.findMany();
}

export async function getProductById(productId: number) {
  try {
    const product = await prisma.product.findUnique({
      where: {
        id: productId,
      },
    });
    return product;
  } catch (error) {
    console.error('Error fetching product by ID:', error);
    throw error;
  }
}

export async function getProductsByBrand(brand: string) {
  try {
    const products = await prisma.product.findMany({
      where: {
        brand: {
          equals: brand,
        },
      },
    });
    return products;
  } catch (error) {
    console.error('Error fetching products by brand:', error);
    throw error;
  }
}

export async function searchProducts(query: string) {
  try {
    const products = await prisma.product.findMany({
      where: {
        OR: [
          { name: { contains: query, mode: 'insensitive' } },
          { brand: { contains: query, mode: 'insensitive' } },
          { description: { contains: query, mode: 'insensitive' } },
        ],
      },
    });
    return products;
  } catch (error) {
    console.error('Error searching products:', error);
    throw error;
  }
}

export async function createProduct(productData: {name: string, description: string, image: string, price: number, category: string, brand: string, variants: string[]}) {
  try {
    const newProduct = await prisma.product.create({
      data: {
        name: productData.name,
        description: productData.description,
        image: productData.image,
        price: productData.price,
        category: productData.category,
        brand: productData.brand,
        variants: {
          create: productData.variants.map(variant => ({ color: variant }))
        }
      },
    });
    return newProduct;
  } catch (error) {
    console.error('Error creating product:', error);
    throw error;
  }
}

export async function updateProduct(productId: number, updatedData: Prisma.ProductUpdateInput): Promise<Product | null> {
  try {
    // Utiliser la méthode update de Prisma pour mettre à jour le produit
    const updatedProduct = await prisma.product.update({
      where: { id: productId }, // Spécifier l'ID du produit à mettre à jour
      data: updatedData, // Spécifier les données mises à jour
    });
    return updatedProduct;
  } catch (error) {
    console.error('Error updating product:', error);
    throw error;
  }
}

export async function uploadImage(file: Express.Multer.File) {
  try {
      // Ici, vous pouvez implémenter la logique pour enregistrer le fichier
      // dans le répertoire de stockage et récupérer l'URL de l'image
      const imageUrl = 'http://localhost:5000/' + file.filename; // Exemple d'URL
      return imageUrl;
  } catch (error) {
      console.error('Erreur lors de l\'enregistrement de l\'image :', error);
      throw error;
  }
}

/*export async function createProductWithImage(productData: { name: string, description: string, price: number, categoryId: number, imagePath: string }) {
  try {
    // Enregistrer le produit dans la base de données
    const newProduct = await prisma.product.create({
      data: {
        name: productData.name,
        description: productData.description,
        price: productData.price,
        categoryId: productData.categoryId,
        image: productData.imagePath // Enregistrer le chemin de l'image dans la base de données
      }
    });
    return newProduct;
  } catch (error) {
    console.error('Erreur lors de la création du produit avec image :', error);
    throw error;
  }
}*/
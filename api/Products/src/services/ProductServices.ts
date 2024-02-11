import { PrismaClient } from "@prisma/client";

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

export async function createProduct(productData: {name: string, description: string, image: string, price: number, categoryId: number}) {
  try {
    const newProduct = await prisma.product.create({
      data: {
        name: productData.name,
        description: productData.description,
        image: productData.image,
        price: productData.price,
        categoryId: productData.categoryId,
      },
    });
    return newProduct;
  } catch (error) {
    console.error('Error creating product:', error);
    throw error;
  }
}

/*export async function createProduct(productData: { name: string, description: string, image: string, price: number }) {
  try {
    // Générer un chemin unique pour l'image sur le disque
    const imageName = `${Date.now()}_${(productData.name || "").replace(/\s+/g, "_")}.jpg`;
    const imagePath = path.join(__dirname, "/images", imageName);
    console.log("Chemin de l'image:", imagePath);

    // Vérifier si le dossier "images" existe, sinon le créer
    const imagesFolderPath = path.join(__dirname, "/images");
    try {
      await fs.access(imagesFolderPath);
    } catch (error) {
      console.log("Le dossier 'images' n'existe pas. Création...");
      await fs.mkdir(imagesFolderPath);
    }

    // Copier l'image depuis productData.image vers le chemin local imagePath
    await fs.copyFile(productData.image, imagePath);

    // Enregistrez le produit dans la base de données avec le chemin local de l'image
    const createdProduct = await prisma.product.create({
      data: {
        name: productData.name,
        description: productData.description,
        image: imagePath,
        price: productData.price,
      },
    });

    console.log("Product created successfully:", createdProduct);

    return createdProduct;
  } catch (error) {
    console.error("Error creating product:", error);
    throw error; // Renvoie l'erreur pour la traiter plus haut si nécessaire
  }
}*/
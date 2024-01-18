import express from "express"
import { Request, Response } from "express";
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();
export const Router = express.Router()


Router.get("/product", async (req: Request, res: Response) => {
    //res.send(`Get product !`)
    try {
        const products = await prisma.product.findMany();
        res.json(products);
      } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Erreur lors de la récupération des produits' });
      }
});

// Ajoutez un nouveau produit
Router.post("/product/:idItem", async (req: Request<{ idItem: number }>, res: Response) => {
    const { idItem } = req.params;

    try {
        // Récupérer les données de la requête POST
        const { name, description, image, price } = req.body;

        //créer un nouveau produit avec prisma
        const newItem = await prisma.product.create({
            data: {
                name,
                description,
                image,
                price,
              },
            });
        
            res.json({ message: `You added item ${idItem} to your product!`, newItem });
          } catch (error) {
            console.error(error);
            res.status(500).json({ error: 'Erreur lors de l\'ajout du produit' });
          }
        });
  
// Supprimez un produit
Router.delete("/product/:idItem", async (req: Request<{ idItem: number }>, res: Response) => {
    const { idItem } = req.params;
  
    try {
      const deletedItem = await prisma.product.delete({
        where: {
          id: Number(idItem),
        },
      });
      res.json({ message: `You removed item ${idItem} from your product!`, deletedItem });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Erreur lors de la suppression du produit' });
    }
  });

/*Router.post("/prodcut/:idItem", (req: Request<{idItem: number}>, res: Response) => {
    res.send(`You added item ${req.params.idItem} to your product !`)
})

Router.delete("/product/:idItem", (req: Request<{idItem: number}>, res: Response) => {
    res.send(`You removed item ${req.params.idItem} from your product !`)
})*/


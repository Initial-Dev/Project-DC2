import { Request, Response } from 'express';
import { ProductService } from '../services/ProductService';

const productService = new ProductService();

export class ProductController {
	static async createProduct(req: Request, res: Response) {
		const { name, description, price } = req.body;
		try {
			const product = await productService.createProduct(
				name,
				description,
				price
			);
			res.json(product);
		} catch (error) {
			if (error instanceof Error) {
				res.status(500).json({ message: error.message });
			} else {
				res.status(500).json({ message: 'An unknown error occurred' });
			}
		}
	}

	static async getProductById(req: Request, res: Response) {
		const { productId } = req.params;
		try {
			const product = await productService.getProductById(
				parseInt(productId)
			);
			res.json(product);
		} catch (error) {
			if (error instanceof Error) {
				res.status(500).json({ message: error.message });
			} else {
				res.status(500).json({ message: 'An unknown error occurred' });
			}
		}
	}

	static async updateProduct(req: Request, res: Response) {
		const { productId } = req.params;
		const { name, description, price } = req.body;
		try {
			const updatedProduct = await productService.updateProduct(
				parseInt(productId),
				name,
				description,
				price
			);
			res.json(updatedProduct);
		} catch (error) {
			if (error instanceof Error) {
				res.status(500).json({ message: error.message });
			} else {
				res.status(500).json({ message: 'An unknown error occurred' });
			}
		}
	}

	static async deleteProduct(req: Request, res: Response) {
		const { productId } = req.params;
		try {
			const result = await productService.deleteProduct(
				parseInt(productId)
			);
			res.json({ message: 'Product deleted successfully', result });
		} catch (error) {
			if (error instanceof Error) {
				res.status(500).json({ message: error.message });
			} else {
				res.status(500).json({ message: 'An unknown error occurred' });
			}
		}
	}

	static async getAllProducts(req: Request, res: Response) {
		try {
			const products = await productService.getAllProducts();
			res.json(products);
		} catch (error) {
			if (error instanceof Error) {
				res.status(500).json({ message: error.message });
			} else {
				res.status(500).json({ message: 'An unknown error occurred' });
			}
		}
	}

	static async searchProductsByName(req: Request, res: Response) {
		if (typeof req.query.name !== 'string') {
			return res
				.status(400)
				.json({ message: 'Name is required and must be a string' });
		}
		const name = req.query.name;
		try {
			const products = await productService.searchProductsByName(name);
			res.json(products);
		} catch (error) {
			if (error instanceof Error) {
				res.status(500).json({ message: error.message });
			} else {
				res.status(500).json({ message: 'An unknown error occurred' });
			}
		}
	}
}

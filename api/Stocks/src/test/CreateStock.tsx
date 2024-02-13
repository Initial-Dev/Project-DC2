import { Request, Response } from 'express';
import { StockController } from '../controllers/StockController';

// Mock du StockService
jest.mock('../services/StockService', () => {
	return {
		StockService: jest.fn().mockImplementation(() => ({
			createStock: jest.fn().mockResolvedValue({
				// Ici, on définit un mock pour la méthode createStock du service,
				// pour qu'elle retourne immédiatement une valeur prédéfinie quand elle est appelée.
				id: 1,
				productId: 1,
				color: 2,
				size: 42,
				quantity: 100,
				reorderThreshold: 10,
			}),
		})),
	};
});

describe('StockController.createStock', () => {
	let req: Partial<Request>;
	let res: Partial<Response>;

	beforeEach(() => {
		// beforeEach est un hook qui s'exécute avant chaque test.
		// Ici, il initialise les objets req et res pour simuler une requête et une réponse.
		req = {
			body: {
				// Simule le corps de la requête envoyée au contrôleur.
				productId: 1,
				color: 2,
				size: 42,
				quantity: 100,
				reorderThreshold: 10,
			},
		};

		res = {
			json: jest.fn(), // Mock de la méthode json pour vérifier si elle est appelée avec le bon argument.
			status: jest.fn().mockReturnThis(), // Mock de la méthode status pour vérifier si elle est appelée avec le bon statut.
		};
	});

	it('should create a new stock entry and return 201 status code', async () => {
		// Le corps du test.
		await StockController.createStock(req as Request, res as Response);
		// Appelle la méthode createStock du StockController avec les objets req et res mockés.

		// Vérifie que la méthode createStock du service a été appelée avec les arguments attendus.
		expect(res.status).toHaveBeenCalledWith(201); // Vérifie si la méthode status a été appelée avec 201.
		expect(res.json).toHaveBeenCalledWith(
			expect.objectContaining({
				// Vérifie si la méthode json a été appelée avec un objet contenant les propriétés spécifiées.
				id: 1,
				productId: 1,
				color: 2,
				size: 42,
				quantity: 100,
				reorderThreshold: 10,
			})
		);
	});
});

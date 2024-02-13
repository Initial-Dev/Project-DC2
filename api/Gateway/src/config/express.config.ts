import express, { Application } from 'express';

const ExpressConfig = (): Application => {
	const app = express();

	// Middleware pour parser les corps de requêtes JSON.
	app.use(express.json());

	return app;
};

export default ExpressConfig;

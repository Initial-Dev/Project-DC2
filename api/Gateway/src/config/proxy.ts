import { Application, NextFunction, Request, Response } from 'express';
import { Options, createProxyMiddleware } from 'http-proxy-middleware';
import AuthenticateJWT from '../middlewares/AuthenticateJWT';
import { Route } from '../routes/routes';

const setupProxies = (app: Application, routes: Route[]) => {
	routes.forEach((route) => {
		// Récupère les options de proxy de la route actuelle
		const proxyOptions: Options = route.proxy;

		// Middleware conditionnel qui vérifie si l'authentification est requise pour la route
		const conditionalMiddleware = (
			req: Request,
			res: Response,
			next: NextFunction
		) => {
			// Si l'authentification est requise pour cette route, utilise le middleware authenticateJWT
			if (route.auth) {
				AuthenticateJWT(req, res, next);
			} else {
				// Sinon, passe simplement au prochain middleware sans exiger l'authentification
				next();
			}
		};

		app.use(
			route.url,
			conditionalMiddleware,
			createProxyMiddleware(proxyOptions)
		);
	});
};

export default setupProxies;

import { Request, Response } from 'express';
import * as AuthService from '../services/auth.service';

export const register = async (req: Request, res: Response) => {
	try {
		const { email, name, password } = req.body;
		const user = await AuthService.register(email, name, password);
		res.json(user);
	} catch (error) {
		const err = error as Error;
		res.status(500).json({ message: err.message });
	}
};

export const login = async (req: Request, res: Response) => {
	try {
		const { email, password } = req.body;
		const user = await AuthService.login(email, password);
		res.json(user);
	} catch (error) {
		const err = error as Error;
		res.status(500).json({ message: err.message });
	}
};

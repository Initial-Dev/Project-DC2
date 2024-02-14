import { User } from '@prisma/client';
import { Request, Response } from 'express';
import {
	deleteUser,
	findAllUsers,
	findUserById,
	updatePassword as updatePasswordService,
	updateUserRole as updateUserRoleService,
	updateUser as updateUserService,
} from '../services/user.service';

export class UserController {
	// Récupérer tous les utilisateurs
	public async getAllUsers(_req: Request, res: Response) {
		try {
			const users = await findAllUsers();
			res.status(200).json(users);
		} catch (error) {
			if (error instanceof Error) {
				res.status(500).json({ message: error.message });
			} else {
				res.status(500).json({
					message: 'An unexpected error occurred',
				});
			}
		}
	}

	// Récupérer un utilisateur par son ID
	public async getUserById(req: Request, res: Response) {
		try {
			const user = await findUserById(Number(req.params.id));
			if (user) {
				res.json(user);
			} else {
				res.status(404).json({ message: 'User not found' });
			}
		} catch (error) {
			if (error instanceof Error) {
				res.status(500).json({ message: error.message });
			} else {
				res.status(500).json({
					message: 'An unexpected error occurred',
				});
			}
		}
	}

	// Mise à jour des informations de l'utilisateur connecté
	public async updateUserDetails(req: Request, res: Response) {
		const userId = (req.user as User).id;
		const { email, name } = req.body;

		try {
			// Vérifier que l'ID de l'utilisateur connecté correspond à celui pour lequel la mise à jour est demandée
			if (!userId || Number(req.params.id) !== userId) {
				return res.status(403).json({
					message: 'Unauthorized to update details for this user.',
				});
			}

			// Validation pour s'assurer que seuls les champs autorisés sont mis à jour
			const dataToUpdate = { email, name };
			const updatedUser = await updateUserService(userId, dataToUpdate);

			res.json(updatedUser);
		} catch (error) {
			if (error instanceof Error) {
				res.status(500).json({ message: error.message });
			} else {
				res.status(500).json({
					message: 'An unexpected error occurred',
				});
			}
		}
	}

	// Mise à jour du mot de passe de l'utilisateur
	public async updatePassword(req: Request, res: Response) {
		const userId = (req.user as User).id;
		const { oldPassword, newPassword, confirmPassword } = req.body;

		if (!userId || Number(req.params.id) !== userId) {
			return res.status(403).json({
				message: 'Unauthorized to update password for this user.',
			});
		}

		try {
			const updatedUser = await updatePasswordService(
				userId,
				oldPassword,
				newPassword,
				confirmPassword
			);
			res.json(updatedUser);
		} catch (error) {
			if (error instanceof Error) {
				res.status(500).json({ message: error.message });
			} else {
				res.status(500).json({
					message: 'An unexpected error occurred',
				});
			}
		}
	}

	// Supprimer un utilisateur
	public async deleteUser(req: Request, res: Response) {
		const userId = (req.user as User).id;

		if (!userId || Number(req.params.id) !== userId) {
			return res.status(403).json({
				message: 'Unauthorized to delete this user.',
			});
		}

		try {
			await deleteUser(Number(req.params.id));
			res.status(204).send();
		} catch (error) {
			if (error instanceof Error) {
				res.status(500).json({ message: error.message });
			} else {
				res.status(500).json({
					message: 'An unexpected error occurred',
				});
			}
		}
	}

	// Changer le rôle d'un utilisateur par un Admin
	public async updateUserRole(req: Request, res: Response) {
		try {
			// Vérifier si l'utilisateur connecté est un Admin
			if ((req.user as User).role !== 'ADMIN') {
				return res.status(403).json({
					message: 'Unauthorized. Only Admins can change user roles.',
				});
			}
			const updatedUser = await updateUserRoleService(
				Number(req.params.id),
				req.body.role
			); // Changer le rôle de l'utilisateur
			res.status(200).json(updatedUser);
		} catch (error) {
			if (error instanceof Error) {
				res.status(500).json({ message: error.message });
			} else {
				res.status(500).json({
					message: 'An unexpected error occurred',
				});
			}
		}
	}
}

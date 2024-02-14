import { PrismaClient } from '@prisma/client';
import bcrypt from 'bcrypt';

const prisma = new PrismaClient();

// Récupérer tous les utilisateurs
export const findAllUsers = async () => {
	return await prisma.user.findMany();
};

// Récupérer un utilisateur par son ID
export const findUserById = async (id: number) => {
	return await prisma.user.findUnique({
		where: { id },
	});
};

// Mise à jour des informations de l'utilisateur (email et nom uniquement)
export const updateUser = async (
	id: number,
	data: { email?: string; name?: string }
) => {
	return await prisma.user.update({
		where: { id },
		data,
	});
};

// Service pour mettre à jour le mot de passe de l'utilisateur
export const updatePassword = async (
	id: number,
	oldPassword: string,
	newPassword: string,
	confirmPassword: string
) => {
	// Trouver l'utilisateur par son ID
	const user = await prisma.user.findUnique({
		where: { id },
	});

	// Vérifier si l'utilisateur existe
	if (!user) {
		throw new Error('User not found');
	}

	// Vérifier si l'ancien mot de passe correspond
	const isMatch = await bcrypt.compare(oldPassword, user.password);
	if (!isMatch) {
		throw new Error('Old password does not match');
	}

	// Vérifier si le nouveau mot de passe et la confirmation correspondent
	if (newPassword !== confirmPassword) {
		throw new Error('New password and confirm password do not match');
	}

	// Hacher le nouveau mot de passe avant de le sauvegarder
	const hashedNewPassword = await bcrypt.hash(newPassword, 10);

	// Mettre à jour le mot de passe de l'utilisateur
	return await prisma.user.update({
		where: { id },
		data: { password: hashedNewPassword },
	});
};

// Supprimer un utilisateur
export const deleteUser = async (id: number) => {
	return await prisma.user.delete({
		where: { id },
	});
};

// Changer le rôle d'un utilisateur
export const updateUserRole = async (id: number, role: 'ADMIN' | 'USER') => {
	return await prisma.user.update({
		where: { id },
		data: { role },
	});
};

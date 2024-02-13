import { PrismaClient } from '@prisma/client';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

const prisma = new PrismaClient();

export const register = async (
	email: string,
	name: string,
	password: string
) => {
	const hashedPassword = await bcrypt.hash(password, 10);
	const avatarUrl = `https://avatar.vercel.sh/rauchg.svg?text=${name
		.substring(0, 2)
		.toUpperCase()}`;

	const user = await prisma.user.create({
		data: {
			email,
			name,
			password: hashedPassword,
			avatar: avatarUrl,
		},
	});

	return user;
};

export const login = async (email: string, password: string) => {
	const user = await prisma.user.findUnique({ where: { email } });

	if (!user || !(await bcrypt.compare(password, user.password))) {
		throw new Error('Invalid credentials');
	}

	const token = jwt.sign(
		{ sub: user.id },
		process.env.JWT_SECRET || 'your_secret_key',
		{ expiresIn: '1h' }
	);

	return { ...user, token };
};

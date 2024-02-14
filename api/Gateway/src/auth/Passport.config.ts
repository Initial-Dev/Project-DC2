import { PrismaClient } from '@prisma/client';
import { Application } from 'express';
import passport from 'passport';
import { ExtractJwt, Strategy as JwtStrategy } from 'passport-jwt';

const prisma = new PrismaClient();

const applyPassportStrategy = (app: Application) => {
	const options = {
		jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
		secretOrKey: process.env.JWT_SECRET || 'secret_key',
	};

	passport.use(
		new JwtStrategy(options, async (jwt_payload, done) => {
			try {
				const user = await prisma.user.findUnique({
					where: {
						id: jwt_payload.sub,
					},
				});

				if (user) {
					return done(null, user);
				} else {
					return done(null, false);
				}
			} catch (error) {
				console.error(error);
				return done(error, false);
			}
		})
	);

	// Initialise Passport et restaure l'état d'authentification à partir de la session.
	app.use(passport.initialize());
};

export default applyPassportStrategy;

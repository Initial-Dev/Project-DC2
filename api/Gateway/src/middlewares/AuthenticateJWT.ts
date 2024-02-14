import { User } from '@prisma/client';
import { NextFunction, Request, Response } from 'express';
import passport from 'passport';
import { IVerifyOptions } from 'passport-local';

const AuthenticateJWT = (req: Request, res: Response, next: NextFunction) => {
	passport.authenticate(
		'jwt',
		{ session: false },
		(err: Error, user: User | false, info: IVerifyOptions) => {
			if (err) {
				return next(err);
			}
			if (!user) {
				if (info.message === 'TokenExpiredError') {
					return res.status(401).json({
						message:
							'Your token has expired. Please generate a new one',
					});
				} else {
					return res
						.status(401)
						.json({ message: info.message || 'Unauthorized' });
				}
			}
			req.user = user;
			next();
		}
	)(req, res, next);
};

export default AuthenticateJWT;

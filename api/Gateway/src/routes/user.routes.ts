import { Router } from 'express';
import { UserController } from '../controllers/user.controller';
import AuthenticateJWT from '../middlewares/AuthenticateJWT';

const router = Router();
const userController = new UserController();

/**
 * @swagger
 * tags:
 *   name: Users
 *   description: API endpoints for user management
 */

/**
 * @swagger
 * /users/all-users:
 *   get:
 *     summary: Retrieve all users
 *     tags: [Users]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       '200':
 *         description: A list of users
 *       '401':
 *         description: Unauthorized
 *       '500':
 *         description: Internal server error
 */
router.get('/users/all-user', userController.getAllUsers);

/**
 * @swagger
 * /users/{id}:
 *   get:
 *     summary: Get a user by ID
 *     tags: [Users]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: ID of the user to get
 *     responses:
 *       '200':
 *         description: A single user object
 *       '404':
 *         description: User not found
 *       '500':
 *         description: Internal server error
 */
router.get('/users/:id', userController.getUserById);

/**
 * @swagger
 * /users/{id}/details:
 *   put:
 *     summary: Update user details
 *     tags: [Users]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: ID of the user to update
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               email:
 *                 type: string
 *               name:
 *                 type: string
 *     responses:
 *       '200':
 *         description: User details updated successfully
 *       '403':
 *         description: Unauthorized to update details for this user
 *       '500':
 *         description: Internal server error
 */
router.put(
	'/users/:id/details',
	AuthenticateJWT,
	userController.updateUserDetails
);

/**
 * @swagger
 * /users/{id}/password:
 *   put:
 *     summary: Update user password
 *     tags: [Users]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: ID of the user to update password
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               oldPassword:
 *                 type: string
 *               newPassword:
 *                 type: string
 *               confirmPassword:
 *                 type: string
 *     responses:
 *       '200':
 *         description: User password updated successfully
 *       '403':
 *         description: Unauthorized to update password for this user
 *       '500':
 *         description: Internal server error
 */
router.put(
	'/users/:id/password',
	AuthenticateJWT,
	userController.updatePassword
);

/**
 * @swagger
 * /users/{id}:
 *   delete:
 *     summary: Delete a user
 *     tags: [Users]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: ID of the user to delete
 *     responses:
 *       '204':
 *         description: User deleted successfully
 *       '403':
 *         description: Unauthorized to delete this user
 *       '500':
 *         description: Internal server error
 */
router.delete('/users/:id', AuthenticateJWT, userController.deleteUser);

/**
 * @swagger
 * /users/{id}/role:
 *   put:
 *     summary: Update user role
 *     tags: [Users]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: ID of the user to update role
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               role:
 *                 type: string
 *     responses:
 *       '200':
 *         description: User role updated successfully
 *       '403':
 *         description: Unauthorized to update role for this user
 *       '500':
 *         description: Internal server error
 */
router.put('/users/:id/role', AuthenticateJWT, userController.updateUserRole);

export default router;

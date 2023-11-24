const express = require('express'),
    router = express.Router(),
    UserController = require('../controllers/users.controller'),
    UsersService = require('../services/users.service'),
    { query, body, validationResult } = require('express-validator'),
    { userBodyValidator, userQueryValidator } = require('./user.validators');

/**
 * @swagger
 * /api/users:
 *   get:
 *     tags: [get by id]
 *     summary: get all users or user by id
 *     description: get all users or user by id
 *     parameters:
 *       - in: query
 *         name: id
 *         description: user id.
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: A single user.
 *         
*/

/**
 * @swagger
 * /api/users:
 *   post:
 *     tags: [post]
 *     summary: Create a new user
 *     parameters: 
 *       - in: body
 *         name: user
 *         description: user create
 *         schema: 
 *           type: object
 *           properties:
 *             user:
 *               type: object
 *               properties: 
 *                 id:
 *                   type: string
 *                   example: 5
 *                 name:
 *                   type: string
 *                   example: Bob
 *                 age:
 *                   type: string
 *                   example: 30
 *     responses:
 *       200:
 *         description: user created.
*/

/**
 * @swagger
 * /api/users:
 *   put:
 *     tags: [put]
 *     summary: updating user by id
 *     parameters: 
 *       - in: body
 *         name: user
 *         description: user create
 *         schema: 
 *           type: object
 *           properties:
 *             user:
 *               type: object
 *               properties: 
 *                 id:
 *                   type: string
 *                   required: true
 *                   example: 5
 *                 name:
 *                   type: string
 *                   example: Bob
 *                 age:
 *                   type: string
 *                   example: 30
 *     responses:
 *       200:
 *         description: user created.
*/

/**
 * @swagger
 * /api/users:
 *   delete:
 *     tags: [delete]
 *     summary: get all users
 *     description: get all users
 *     parameters:
 *       - in: query
 *         name: id
 *         required: true
 *         description: user id.
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: A single user.
 *         
*/

router.use(async (req, res, next) => {
    let data = await UsersService.getUsers();

    if (data) {
        req.users = data;
        next();
    } else
        return res
            .status(500)
            .send({ message: 'Error while getting users' });
});



router
    .route('/')
    .get(userQueryValidator, UserController.getUsers)
    .post(userBodyValidator, UserController.createUser)
    .put(userBodyValidator, UserController.updateUser)
    .delete(userQueryValidator, UserController.deleteUser);

module.exports = router;
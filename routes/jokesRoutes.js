const express = require('express')
const { getAllJokes, getJokeById, getRandomJoke, addJoke, updateJoke, deleteJoke } = require('../controllers/jokesControllers')
const router = express.Router()

/**
 * @swagger
 * /jokes:
 *   get:
 *     summary: Retrieve all jokes from the database
 *     tags: [Jokes]
 *     responses:
 *       200:
 *         description: The whole jokes list.
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                  $ref: '#/components/schemas/CarambarJokes'
 *       500:
 *         description: Server error
 *   post:
 *     summary: Add a new joke to the database
 *     tags: [Jokes]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/CarambarJokes'
 *     responses:
 *       200:
 *         description: Joke successfully added.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/CarambarJokes'
 *       500:
 *         description: Server error
 * 
 * /jokes/{jokeId}:
 *   get:
 *     summary: Get a specific joke
 *     tags: [Jokes]
 *     parameters:
 *       - in: path
 *         name: jokeId
 *         schema:
 *           type: integer
 *         required: true
 *         description: The joke ID
 *     responses:
 *       200:
 *         description: The joke
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/CarambarJokes'
 *       500:
 *         description: Server error
 * 
 *   put:
 *     summary: Update a specific joke
 *     tags: [Jokes]
 *     parameters:
 *       - in: path
 *         name: jokeId
 *         schema:
 *           type: integer
 *         required: true
 *         description: The joke ID
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/CarambarJokes'
 *     responses:
 *       200:
 *         description: Joke successfully updated.
 * 
 *   delete:
 *     summary: Delete a specific joke
 *     tags: [Jokes]
 *     parameters:
 *       - in: path
 *         name: jokeId
 *         schema:
 *           type: integer
 *         required: true
 *         description: The joke ID
 *     responses:
 *       200:
 *         description: Joke successfully deleted.
 * 
 * /random-joke/{randomId}:
 *   get:
 *     summary: Get a random joke
 *     tags: [Jokes]
 *     parameters:
 *       - in: path
 *         name: randomId
 *         schema:
 *           type: integer
 *         required: true
 *         description: The random joke ID
 *     responses:
 *       200:
 *         description: The random joke
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/CarambarJokes'
 *       500:
 *         description: Server error
 */

router.route('/jokes').get(getAllJokes)
router.route('/jokes').post(addJoke)
router.route('/jokes/:jokeId').get(getJokeById)
router.route('/jokes/:jokeId').put(updateJoke)
router.route('/jokes/:jokeId').delete(deleteJoke)
router.route('/random-joke/:randomId').get(getRandomJoke)

module.exports = router
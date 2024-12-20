const router = require('express').Router()
const { getAllJokes, getJokeById, getRandomJoke, addJoke, updateJoke, deleteJoke } = require('../controllers/jokesControllers')

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
 *       400:
 *         description: Invalid ID supplied
 *       404:
 *         description: Joke not found
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
 *       400:
 *         description: Invalid ID supplied
 *       404:
 *         description: Joke to update not found
 *       500:
 *         description: Server error
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
 *       400:
 *         description: Invalid ID supplied
 *       404:
 *         description: Joke to delete not found
 *       500:
 *         description: Server error
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
 *       400:
 *         description: Invalid ID returned
 *       404:
 *          description: Joke not found
 *       500:
 *          description: Server error
 */

router.route('/jokes').get(getAllJokes).post(addJoke)
router.route('/jokes/:jokeId').get(getJokeById).put(updateJoke).delete(deleteJoke)
router.route('/random-joke/:randomId').get(getRandomJoke)

module.exports = router
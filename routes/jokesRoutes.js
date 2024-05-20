const express = require('express')

const { getAllJokes, getJokeById, getRandomJoke, addJoke, updateJoke, deleteJoke } = require('../controllers/jokesControllers')

// express middleware
const router = express.Router()

// CRUD routes for CarambarJokes
router.route('/api.carambarJokes/v1.0.0/jokes').get(getAllJokes).post(addJoke)
router.route('/api.carambarJokes/v1.0.0/jokes/:jokeId').get(getJokeById).put(updateJoke).delete(deleteJoke)
router.route('/api.carambarJokes/v1.0.0/random-joke/:randomId').get(getRandomJoke)

module.exports = router
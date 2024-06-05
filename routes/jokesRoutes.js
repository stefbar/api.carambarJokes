const express = require('express')
// const bodyParser  = require('body-parser')
const { getAllJokes, getJokeById, getRandomJoke, addJoke, updateJoke, deleteJoke } = require('../controllers/jokesControllers')

const router = express.Router()
// router.use(bodyParser.json())


// router.get('/api.carambarJokes/v1.0.0/jokes', async (req, res) => {
//     try {
//         const jokes = await CarambarJokes.findAll()
//         res.json(jokes)
//     } catch(err) {
//         res.status(500).send(err)
//     }
// })
// router.get('/api.carambarJokes/v1.0.0/jokes', getAllJokes)
router.route('/api.carambarJokes/v1.0.0/jokes').get(getAllJokes)

// router.route('/api.carambarJokes/v1.0.0/jokes').post(addJoke)
// router.route('/api.carambarJokes/v1.0.0/jokes/:jokeId').get(getJokeById)
// router.route('/api.carambarJokes/v1.0.0/jokes/:jokeId').put(updateJoke)
// router.route('/api.carambarJokes/v1.0.0/jokes/:jokeId').delete(deleteJoke)
// router.route('/api.carambarJokes/v1.0.0/random-joke/:randomId').get(getRandomJoke)

module.exports = router
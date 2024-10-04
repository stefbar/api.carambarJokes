const CarambarJokes = require('../models/jokesModels')

/**
 * Retrieves all jokes from the database and sends them as a JSON response.
 *
 * @param {Object} req - The request object.
 * @param {Object} res - The response object.
 * @return {Promise<void>} A promise that resolves when the jokes are retrieved and sent as a response.
 */
exports.getAllJokes = async (req, res) => {
    try {
        const jokes = await CarambarJokes.findAll()
        if(!jokes) {
            res.status(404).send(`Jokes not found`)
            return
        }
        res.status(200).json(jokes)
        console.log(res)
    } catch(err) {
        res.status(500).send(err)
    }
}

/**
 * Retrieves a joke from the database by its ID and sends it as a JSON response.
 *
 * @param {Object} req - The request object.
 * @param {Object} res - The response object.
 * @return {Promise<void>} A promise that resolves when the joke is retrieved and sent as a response.
 */
exports.getJokeById = async (req, res) => {
    try {
        const joke = await CarambarJokes.findByPk(req.params.jokeId)
        if(!joke) {
            res.status(404).send(`Joke ${req.params.jokeId} not found`)
            return
        }
        res.json(joke)
    } catch(err) {
        res.status(500).send(err)
    }
}

/**
 * Retrieves a random joke from the database and sends it as a JSON response.
 *
 * @param {Object} req - The request object.
 * @param {Object} res - The response object.
 * @return {Promise<void>} A promise that resolves when the joke is retrieved and sent as a response.
 */
exports.getRandomJoke = async (req, res) => {
    const randomId = await Math.floor(Math.random() * 10 + 1)
    try {
        const joke = await CarambarJokes.findByPk(randomId)
        res.json(joke)
    } catch(err) {
        res.status(404).send(`Joke ${randomId} not found`)
        res.status(500).send(err)
    }
}

/**
 * Adds a new joke to the database.
 *
 * @param {Object} req - The request object.
 * @param {Object} res - The response object.
 * @return {Promise<void>} A promise that resolves when the joke is added successfully.
 */
exports.addJoke = async (req, res) => {
    try {
        const joke = await CarambarJokes.create(req.body)
        res.json(joke).send(`Joke added susccessfully`)
    } catch(err) {
        res.status(500).send(err)
    }
}

/**
 * Updates a joke in the database.
 *
 * @param {Object} req - The request object containing the joke ID and updated joke data.
 * @param {Object} res - The response object used to send the updated joke or an error message.
 * @return {Promise<void>} A promise that resolves when the joke is updated successfully or rejects with an error.
 */
exports.updateJoke = async (req, res) => {
    try {
        const joke = await CarambarJokes.findByPk(req.params.jokeId)
        if(!joke) {
            res.status(404).send(`Joke ${req.params.jokeId} not found`)
            return
        }
        const updatedJoke = await joke.update(req.body)
        res.json(updatedJoke)
    } catch(err) {
        res.status(500).send(err)
    }
}

/**
 * Deletes a joke from the database.
 *
 * @param {Object} req - The request object containing the joke ID.
 * @param {Object} res - The response object used to send a success message or an error message.
 * @return {Promise<void>} A promise that resolves when the joke is deleted successfully or rejects with an error.
 */
exports.deleteJoke = async (req, res) => {
    try {
        const joke = await CarambarJokes.findByPk(req.params.jokeId)
        if(!joke) {
            res.status(404).send(`Joke ${req.params.jokeId} not found`)
            return
        }
        await joke.destroy()
        res.status(200).send(`Joke ${req.params.jokeId} deleted`)
    } catch(err) {
        res.status(500).send(err)
    }
}
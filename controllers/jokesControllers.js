const CarambarJokes = require('../models/jokesModels')

exports.getAllJokes = async (req, res) => {
    try {
        const jokes = await CarambarJokes.findAll()
        res.json(jokes)
    } catch(err) {
        res.status(500).send(err)
    }
}

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

exports.getRandomJoke = async (req, res) => {
    try {
        const randomId = await Math.floor(Math.random() * 10 + 1)
        const joke = await CarambarJokes.findByPk(randomId)
        res.json(joke)
    } catch(err) {
        res.status(500).send(err)
    }
}

exports.addJoke = async (req, res) => {
    try {
        const joke = await CarambarJokes.create(req.body)
        res.json(joke).send(`Joke  added susccessfully`)
    } catch(err) {
        res.status(500).send(err)
    }
}

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
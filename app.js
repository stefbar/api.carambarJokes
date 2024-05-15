require('dotenv').config()
console.log(process.env)

const express = require('express')
const app = express()
const PORT = process.env.PORT || 3000

const db = require('./database')
const data = require('./data')
app.use(express.json())

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.get('/carambarJokes/jokes', (req, res) => {
    res.send(data.getTotalJokes())
})

app.get('/carambarJokes/jokes/:jokeId', (req, res) => {
    const jokeId = parseInt(req.params.jokeId, 10)
    const joke = data.getJoke(jokeId)

    if (!joke) {
        res.status(404).send('Joke not found')
        return
    }
    res.send(joke)
})

app.post('/carambarJokes/jokes', (req, res) => {
    res.send(data.addJoke(req.body))
})

app.put('/carambarJokes/jokes/:jokeId', (req, res) => {
    const jokeId = parseInt(req.params.jokeId, 10)
    const joke = data.updateJoke(jokeId, req.body)

    if (!joke) {
        res.status(404).send('Joke not found')
        return
    }
    res.send(joke)
})

app.delete('/carambarJokes/jokes/:jokeId', (req, res) => {
    const jokeId = parseInt(req.params.jokeId, 10)
    const jokeToDelete = data.getJoke(jokeId)

    if (!jokeToDelete) {
        res.status(404).send('Joke you want to delete not found')
        return
    }
    if (jokeToDelete === null) {
        res.status(500).send('Could not delete joke')
        return
    }
    data.deleteJoke(jokeId)
    res.status(200).send(`Joke ${jokeId} deleted`)
})

app.listen(PORT, () => {
    console.log(`Carambar app listening on port ${PORT}`)
})

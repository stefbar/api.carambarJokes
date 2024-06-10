const test = require('ava')

const {
    getAllJokes,
    getJokeById,
    getRandomJoke,
    addJoke,
    updateJoke,
    deleteJoke
} = require('../jokesControllers')
// const { response } = require('express')
test('mon test qui passe', t => {
	t.pass();
})

test('must retrieve all jokes', (t) => {
    const jokes = getAllJokes()
    return jokes.then((res) => {
        // t.is(res.status, 200)
        t.is(jokes[0].joke, 'Quelle est la femelle du hamster ?')
    })
    // t.is(jokes, [])
    
    // t.is(jokes[0].id, 1)
    // t.is(jokes.length, 11)
    // t.is(jokes.status, 200)
})
const test = require('ava')
const carambarJokes = require('../../data/tenJokesDbSeed')
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

test('should return an array of all jokes', async (t) => {
    const res = await getAllJokes()
    t.is(res.status, 200)
    t.is(res.length, 10)

    // return jokes.then((res) => {
    //     t.is(jokes[0].joke, 'Quelle est la femelle du hamster ?')
    // })
    // t.is(jokes, [])
    
    // t.is(jokes[0].id, 1)
    // t.is(jokes.status, 200)
})
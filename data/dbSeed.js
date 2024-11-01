const { Sequelize } = require('sequelize')
const config = require('../config/config.json')['production'] // or 'development', depending on your environment
const { CarambarJokes, JokesCategories } = require('../models/jokesModels')

async function seedDatabase() {
    // Your seeding logic here, e.g., using models to create records
    const jokes = [
        {
            id: 1,
            joke: "Quelle est la femelle du hamster ?",
            answer: "L\’Amsterdam",
            category_id: 2 },
        {
            id: 2,
            joke: "Que dit un oignon quand il se cogne ?",
            answer: "Aïe !",
            category_id: 2 },
        {
            id: 3,
            joke: "Quel est l'animal le plus heureux ?",
            answer: "Le hibou, parce que sa femme est chouette.",
            category_id: 2 },
        {
            id: 4,
            joke: "Pourquoi le football c'est rigolo ?",
            answer: "Parce que Thierry en rit",
            category_id: 2 },
        {
            id: 5,
            joke: "Quel est le sport le plus fruité ?",
            answer: "La boxe, parce que tu te prends des pêches dans la poire et tu ombes dans es pommes.",
            category_id: 2 },
        {
            id: 6,
            joke: "Que se fait un Schtroumpf quand il tombe ?",
            answer: "Un Bleu.",
            category_id: 2 },
        {
            id: 7,
            joke: "Quel est le comble pour un marin ?",
            answer: "Avoir le nez qui coule.",
            category_id: 2 },
        {
            id: 8,
            joke: "Qu'est ce que les enfants usent le plus à l'école ?",
            answer: "Le professeur",
            category_id: 2 },
        {
            id: 9,
            joke: "Quel est le sport le plus silencieux ?",
            answer: "Le para-chuuuut.",
            category_id: 2 },
        {
            id: 10,
            joke: "Quel est le comble pour un joueur de bowling ?",
            answer: "C\’est de perdre la boule",
            category_id: 2 },
    ]

    try {
        const sequelize = new Sequelize(config.database, null, null, {
            dialect: 'sqlite',
            storage: config.storage,
        })

        await sequelize.authenticate()
        console.log('Connection has been established successfully.')
        await sequelize.sync()

        await CarambarJokes.bulkCreate(jokes)
        // for (const joke of jokes) {
        //     await CarambarJokes.create(joke)
        // }
        console.log('Jokes have been seeded successfully.')

    } catch (error) {
        console.error('Unable to connect to the database:', error)
    } finally {
        await sequelize.close()
    }

}

seedDatabase()

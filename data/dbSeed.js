const { CarambarJokes, JokesCategories } = require('../models/jokesModels')

async function seedDatabase() {
    // Seeding logic:
    const categories = [
        {
            id: 1,
            category: "story"
        },
        {
            id: 2,
            category: "question"
        },  
        {
            id: 3,
            category: "charade"
        }
    ]

    const jokes = [
        {
            id: 1,
            joke: "Quelle est la femelle du hamster ?",
            answer: "L’Amsterdam",
            category_id: 2
        },
        {
            id: 2,
            joke: "Que dit un oignon quand il se cogne ?",
            answer: "Aïe !",
            category_id: 2
        },
        {
            id: 3,
            joke: "Quel est l'animal le plus heureux ?",
            answer: "Le hibou, parce que sa femme est chouette.",
            category_id: 2
        },
        {
            id: 4,
            joke: "Pourquoi le football c'est rigolo ?",
            answer: "Parce que Thierry en rit",
            category_id: 2
        },
        {
            id: 5,
            joke: "Quel est le sport le plus fruité ?",
            answer: "La boxe, parce que tu te prends des pêches dans la poire et tu tombes dans les pommes.",
            category_id: 2
        },
        {
            id: 6,
            joke: "Que se fait un Schtroumpf quand il tombe ?",
            answer: "Un Bleu.",
            category_id: 2
        },
        {
            id: 7,
            joke: "Quel est le comble pour un marin ?",
            answer: "Avoir le nez qui coule.",
            category_id: 2
        },
        {
            id: 8,
            joke: "Qu'est ce que les enfants usent le plus à l'école ?",
            answer: "Le professeur",
            category_id: 2
        },
        {
            id: 9,
            joke: "Quel est le sport le plus silencieux ?",
            answer: "Le para-chuuuut.",
            category_id: 2
        },
        {
            id: 10,
            joke: "Quel est le comble pour un joueur de bowling ?",
            answer: "C’est de perdre la boule",
            category_id: 2
        },
    ]

    try {
        await JokesCategories.bulkCreate(categories)
        console.log('Categories have been seeded successfully.')
        await CarambarJokes.bulkCreate(jokes)
        // for (const joke of jokes) {
        //     await CarambarJokes.create(joke)
        // }
        console.log('Jokes have been seeded successfully.')

    } catch (error) {
        console.error('Error during seeding the database: ', error)
    }
}

seedDatabase().catch(err => console.error('Seeding failed:', err))

module.exports = { seedDatabase }

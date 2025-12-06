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

    // const jokes = [
    //     {
    //         id: 1,
    //         joke: "Quelle est la femelle du hamster ?",
    //         answer: "L’Amsterdam",
    //         category_id: 2
    //     },
    //     {
    //         id: 2,
    //         joke: "Que dit un oignon quand il se cogne ?",
    //         answer: "Aïe !",
    //         category_id: 2
    //     },
    //     {
    //         id: 3,
    //         joke: "Quel est l'animal le plus heureux ?",
    //         answer: "Le hibou, parce que sa femme est chouette.",
    //         category_id: 2
    //     },
    //     {
    //         id: 4,
    //         joke: "Pourquoi le football c'est rigolo ?",
    //         answer: "Parce que Thierry en rit",
    //         category_id: 2
    //     },
    //     {
    //         id: 5,
    //         joke: "Quel est le sport le plus fruité ?",
    //         answer: "La boxe, parce que tu te prends des pêches dans la poire et tu tombes dans les pommes.",
    //         category_id: 2
    //     },
    //     {
    //         id: 6,
    //         joke: "Que se fait un Schtroumpf quand il tombe ?",
    //         answer: "Un Bleu.",
    //         category_id: 2
    //     },
    //     {
    //         id: 7,
    //         joke: "Quel est le comble pour un marin ?",
    //         answer: "Avoir le nez qui coule.",
    //         category_id: 2
    //     },
    //     {
    //         id: 8,
    //         joke: "Qu'est ce que les enfants usent le plus à l'école ?",
    //         answer: "Le professeur",
    //         category_id: 2
    //     },
    //     {
    //         id: 9,
    //         joke: "Quel est le sport le plus silencieux ?",
    //         answer: "Le para-chuuuut.",
    //         category_id: 2
    //     },
    //     {
    //         id: 10,
    //         joke: "Quel est le comble pour un joueur de bowling ?",
    //         answer: "C’est de perdre la boule",
    //         category_id: 2
    //     },
    // ]

    const jokes = [
        {
            id: 1,
            joke: "Qu'est-ce qui a 118 yeux et 7 dents ?",
            answer: "Un bus rempli de personnes âgées",
            category_id: 2
        },
        {
            id: 2,
            joke: "Je ne prétends pas être Batman, je dis simplement que personne ne m'a jamais vu avec lui dans la même pièce.",
            answer: "",
            category_id: 1
        },
        {
            id: 3,
            joke: "Je me suis toujours demandé ce que les habitants de Versailles disent à leurs enfants quand ils laissent la lumière allumée dans toutes les pièces.",
            answer: "",
            category_id: 1
        },
        {
            id: 4,
            joke: "- Tu sais respirer par le nez ?/n - Bah oui./n - Super, tu peux fermer ta gueule alors...",
            answer: "",
            category_id: 1
        },
        {
            id: 5,
            joke: "Pourquoi est-il déconseillé de téléphoner au volant ?",
            answer: "Parce-qu'il ne répond jamais.",
            category_id: 2
        },
        {
            id: 6,
            joke: "C'est parce-que la lumière va plus vite que le son que beaucoup de gens paraissent brillants avant d'avoir l'air con...",
            answer: "",
            category_id: 1
        },
        {
            id: 7,
            joke: "Avec quoi ramasse t'on la papaye ?",
            answer: "Avec une foufourche.",
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
            joke: "Si t'es fière d'être Blanche-Neige, tape dans tes nains !",
            answer: "",
            category_id: 1
        },
        {
            id: 10,
            joke: "Quand un tuyau mâle rencontre un tuyau femelle, un robi naît.",
            answer: "",
            category_id: 1
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

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
            joke: "- Tu sais respirer par le nez ?\n - Bah oui.\n - Super, tu peux fermer ta gueule alors...",
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
        {
            id: 11,
            joke: "- Je pas à l'île Maurice !\n - Je pars à Lille, Maurice.",
            answer: "",
            category_id: 1
        },
        {
            id: 12,
            joke: "Cher Père Noël, je voudrais un petit cul et un gros compte en banque. Merci de ne pas confondre comme l'année passée.",
            answer: "",
            category_id: 1
        },
        {
            id: 13,
            joke: "La raclette pour le givre c'est vraiment pas pratique : j'ai du fromage plein les essuie-glaces.",
            answer: "",
            category_id: 1
        },
        {
            id: 14,
            joke: "T'es pas le pingouin le plus aiguisé du paquet.",
            answer: "",
            category_id: 1
        },
        {
            id: 15,
            joke: "Le médecin m'a dit que les bananes, c'était bon pour stopper la diarrhée, c'est vrai, ça marche... Mais quand tu l'enlèves ça reprend...",
            answer: "",
            category_id: 1
        },
        {
            id: 16,
            joke: "85% des gens sont nuls en maths. Heureusement, je fais partie des 25% restants.",
            answer: "",
            category_id: 1
        },
        {
            id: 17,
            joke: "Pourquoi parvenez-vous à vous abstenir de faire la bise lorsque vus êtes malade, mais pas de donner votre opinion quand vous êtes con ?",
            answer: "",
            category_id: 1
        },
        {
            id: 18,
            joke: "Pourquoi les forêts bretonnes sont-elles si propres aujourd'hui ?",
            answer: "Parce que des druides y ont passé la serpe hier.",
            category_id: 2
        },
        {
            id: 19,
            joke: "Donnez un laxatif à quelqu'un qui tousse. Ça ne le guérira pas mais il n'osera plus tousser.",
            answer: "",
            category_id: 1
        },
        {
            id: 20,
            joke: "Qu'a dit l'entraineur de Bastien quand celui-ci a mis un magnifique essai lors de son dernier match de rugby ?",
            answer: "Bel essai Bastien !",
            category_id: 2
        },
        {
            id: 21,
            joke: "Qu'y a-t-il de mieux que de faire tourner un enfant sur un tourniquet ?",
            answer: "L'arrêter avec une pelle.",
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

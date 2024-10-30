'use strict'

module.exports = {
    up: async (queryInterface, Sequelize) => {
        await queryInterface.bulkInsert('CarambarJokes', [
            // {
            //     joke: 'Why did the chicken cross the road?',
            //     answer: 'To get to the other side!',
            //     category_id: 1, // Ensure this ID matches your categories
            //     createdAt: new Date(),
            //     updatedAt: new Date(),
            // },
            {
                id: 1,
                joke: "Quelle est la femelle du hamster ?",
                answer: "L\’Amsterdam",
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
                joke: "Quel est l\'animal le plus heureux ?",
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
                answer: "La boxe, parce que tu te prends des pêches dans la poire et tu ombes dans es pommes.",
                "category_id": 2
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
                answer: "C\’est de perdre la boule",
                category_id: 2
            }
            // Add more jokes as needed
        ])
    },

    down: async (queryInterface, Sequelize) => {
        await queryInterface.bulkDelete('CarambarJokes', null, {})
    }
}

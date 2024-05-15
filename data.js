let carambarJokes = [
    {
        "id": 1,
        "joke": "Quelle est la femelle du hamster ?",
        "answer": "L’Amsterdam"
    },
    {
        "id": 2,
        "joke": "Que dit un oignon quand il se cogne ?",
        "answer": "Aïe"
    },
    {
        "id": 3,
        "joke": "Quel est l'animal le plus heureux ?",
        "answer": "Le hibou, parce que sa femme est chouette."
    },
    {
        "id": 4,
        "joke": "Pourquoi le football c'est rigolo ?",
        "answer": "Parce que Thierry en rit"
    },
    {
        "id": 5,
        "joke": "Quel est le sport le plus fruité ?",
        "answer": "La boxe, parce que tu te prends des pêches dans la poire et tu tombes dans les pommes."
    },
    {
        "id": 6,
        "joke": "Que se fait un Schtroumpf quand il tombe ?",
        "answer": "Un Bleu"
    },
    {
        "id": 7,
        "joke": "Quel est le comble pour un marin ?",
        "answer": "Avoir le nez qui coule"
    },
    {
        "id": 8, 
        "joke": "Qu'est ce que les enfants usent le plus à l'école ?",
        "answer": "Le professeur"
    },
    {
        "id": 9,
        "joke": "Quel est le sport le plus silencieux ?",
        "answer": "Le para-chuuuut"
    },
    {
        "id": 10,
        "joke": "Quel est le comble pour un joueur de bowling ?",
        "answer": "C’est de perdre la boule"
    }
]

let lastId = carambarJokes.length + 1

// CONTROLLER

module.exports = {

    /**
    * Retrieves all carambar jokes.
    *
    * @return {Array} Array of carambar jokes
    */
    getTotalJokes() {
        return carambarJokes
    },
    
    /**
     * Retrieves a carambar joke based on the provided id.
     *
     * @param {number} id - The unique identifier of the joke to retrieve
     * @return {Object | undefined} The carambar joke with the specified id, or undefined if not found
     */
    getJoke(id) {
        return carambarJokes.find(joke => joke.id === id)
    },

    /**
     * Adds a new joke to the carambarJokes array.
     *
     * @param {Object} joke - The joke object to be added with 'joke' and 'answer' properties
     * @return {Object} The newly added joke object
     */
    addJoke(joke) {
        const id = ++lastId
        const newJoke = {
            id,
            joke: joke.joke,
            answer: joke.answer
        }
        carambarJokes.push(newJoke)
        return newJoke
    },

    /**
     * Updates a joke in the carambarJokes array based on the provided id.
     *
     * @param {number} id - The unique identifier of the joke to update
     * @param {Object} joke - The updated joke object with 'joke' and 'answer' properties
     */
    updateJoke(id, joke) {
        carambarJokes = carambarJokes.map(joke => {
            if (joke.id === id) {
                return {
                    ...joke,
                    ...joke
                }
            }
            return joke
        })
    },

    /**
     * Deletes a joke from the carambarJokes array based on the provided id.
     *
     * @param {number} id - The unique identifier of the joke to delete
     * @return {number} The id of the deleted joke
     */
    deleteJoke(id) {
        carambarJokes = carambarJokes.filter(j => j.id !== id)
        // return null
        return id
    }
    
}

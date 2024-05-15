import { carambarJokes } from "..backend/data.js";

//model

//view

//controller

// function getJoke() {    
//     fetch('https://api.chucknorris.io/jokes/random')
//     .then(response => response.json())
//     .then(data => console.log(data));
// }

function getTotalJokes(id) {    
    fetch('https://api.carambarJokes/jokes')
    .then(response => response.json())
    .then(data => console.log(data));
}
function getJoke(id) {    
    fetch('https://api.carambarJokes/jokes/{id}')
    .then(response => response.json())
    .then(data => console.log(data));
}

function getRandomJoke() {    
    fetch('https://api.carambarJokes/jokes/random-joke')
    .then(response => response.json())
    .then(data => console.log(data));
}
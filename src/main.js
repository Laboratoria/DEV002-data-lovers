import { example } from './data.js';
// import data from './data/lol/lol.js';
// import data from './data/pokemon/pokemon.js';
// import data from './data/rickandmorty/rickandmorty.js';

const container = document.querySelector("#containerPokemon");

fetch("https://raw.githubusercontent.com/Laboratoria/DEV002-data-lovers/main/src/data/pokemon/pokemon.json")
    .then(response => response.json())
    .then(data => {
        data.pokemon.map(pokemon =>
            pokemon);

    });




// console.log(example, data);

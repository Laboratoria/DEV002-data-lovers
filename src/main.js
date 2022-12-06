import { example } from './data.js';
// import data from './data/lol/lol.js';
import data from './data/pokemon/pokemon.js';
// import data from './data/rickandmorty/rickandmorty.js';

console.log("example esto es la data", data);

const prueba = document.getElementById("prueba")
const dataPokemon = data.pokemon

const displeyCard = (d) => {
    d.forEach(element=>{
        const cardPokemon = document.createElement("div")
        cardPokemon.innerHTML +=`<section> 
        <img src ="${element.img}">
        <p>${element.num}</p>
        </section>
        <h2>${element.name}</h2>
        
        `
        prueba.appendChild(cardPokemon);
    })
}

displeyCard(dataPokemon)





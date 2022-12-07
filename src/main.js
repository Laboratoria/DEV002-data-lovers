import {
  example
} from './data.js';
// import data from './data/lol/lol.js';
import data from './data/pokemon/pokemon.js';
// import data from './data/rickandmorty/rickandmorty.js';

console.log("example esto es la data", data);

//mostrar

const prueba = document.getElementById("prueba")
const dataPokemon = data.pokemon

const displeyCard = (d) => {
  d.forEach(element => {

    const cardPokemon = document.createElement("div")

    cardPokemon.innerHTML += ` <section class= "flex-cont"> <section class= "flex-box">
        <img src ="${element.img}">
        <p>${element.num}</p>
        <section> <h2>${element.name}</h2></div></section>
        </section>
        </section>

        `
    prueba.appendChild(cardPokemon);

  })
}

//displeyCard(dataPokemon)

//filter

let generationI = dataPokemon.filter ((dataPokemon) => {
    return dataPokemon.num <= 151;
});


let generationII = dataPokemon.filter ((dataPokemon) => {
      return dataPokemon.num > 151;
});

displeyCard(generationI)


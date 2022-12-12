import {
  example
} from './data.js';
// import data from './data/lol/lol.js';
import data from './data/pokemon/pokemon.js';
// import data from './data/rickandmorty/rickandmorty.js';

console.log("example esto es la data", data);

//mostrar

const cardsContainer = document.getElementById("cardsContainer")
const dataPokemon = data.pokemon

const displeyCard = (d) => {
    cardsContainer.innerHTML = `<div class="cardvacia"></div> `;
  d.forEach(element => {

    const cardPokemon = document.createElement("div")

    cardPokemon.innerHTML += ` <section class= "flex-cont"> <section class= "flex-box">
        <img src ="${element.img}">
        <p>${element.name}</p>
        <p>${element.num}</p></div>
        </section>
        </section>

        `
    cardsContainer.appendChild(cardPokemon);

  })
}

 displeyCard(dataPokemon)

//filter

let generationI = dataPokemon.filter ((dataPokemon) => {
    return dataPokemon.num <= 151;
});


let generationII = dataPokemon.filter ((dataPokemon) => {
      return dataPokemon.num > 151;
});


const buttonGenerationI = document.getElementById("Generation I")
buttonGenerationI.addEventListener('click',()=> {
    displeyCard(generationI)
})

const buttonGenerationII = document.getElementById("Generation II")
buttonGenerationII.addEventListener('click',()=> {
    displeyCard(generationII)
})

//displeyCard(generationI)

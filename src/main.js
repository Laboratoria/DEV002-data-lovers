import {
   filterGen, filterType
} from './data.js';
// import data from './data/lol/lol.js';
import data from './data/pokemon/pokemon.js';
// import data from './data/rickandmorty/rickandmorty.js';


//mostrar

const cardsContainer = document.getElementById("cardsContainer")
const dataPokemon = data.pokemon

const displeyCard = (d) => {
  cardsContainer.innerHTML = ` `; 
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
let generation
let generationI = filterGen(dataPokemon, "gen-1")
let generationII = filterGen(dataPokemon, "gen-2")

const selectGeneration = document.getElementById('select-generation')
selectGeneration.addEventListener('change', (event) => {
  generation = event.target.value;
  if (event.target.value === 'gen-1') {
    displeyCard(generationI)
  } else if (event.target.value === 'gen-2') {
    displeyCard(generationII)
  } else {
    displeyCard(dataPokemon)
  }
})

const selectType = document.getElementById('select-type')
selectType.addEventListener('change', (event) => {
  let typeSelected = event.target.value;
  let filteredPokemon = filterType(dataPokemon, typeSelected)
  if (generation === 'gen-1') {
    let filteredTypeAndGenI = filterType(generationI, typeSelected)
    displeyCard(filteredTypeAndGenI)
  } else if (generation === 'gen-2') {
    let filteredTypeAndGenII = filterType(generationII, typeSelected)
    displeyCard(filteredTypeAndGenII)
  } else {
    displeyCard(filteredPokemon)
  }
  
})

//displeyCard(generationI)

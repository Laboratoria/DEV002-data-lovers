import {
  filterGen, filterType, sort, computeStats
} from './data.js';// import data from './data/lol/lol.js';
import data from './data/pokemon/pokemon.js';




const cardsContainer = document.getElementById("cardsContainer")
const tableContainer = document.getElementById("table-container")
const dataPokemon = data.pokemon

const displeyCard = (d) => {
  cardsContainer.innerHTML = ` `;
  tableContainer.innerHTML = ` `;
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

const displayStats = () => {
  tableContainer.innerHTML = ` `;
  cardsContainer.innerHTML = ` `;

  const tablePokemon = document.createElement("table")
  
  tablePokemon.innerHTML += `
    <tr class="tabla">
        <th>tipo</th>
        <th>cantidad</th>
        <th>porcentaje</th>
      </tr>

      <tr>
        <td>Normal</td>
        <td>${computeStats(dataPokemon, 'normal', 251)[0]}</td>
        <td>${computeStats(dataPokemon, 'normal', 251)[1]} %</td>
      </tr>

      <tr>
        <td>Agua</td>
        <td>${computeStats(dataPokemon, 'water', 251)[0]}</td>
        <td>${computeStats(dataPokemon, 'water', 251)[1]}%</td>
      </tr>

      <tr>
        <td>Hierba</td>
        <td>${computeStats(dataPokemon, 'grass',251)[0]}</td>
        <td>${computeStats(dataPokemon, 'grass', 251)[1]}%</td>
      </tr>

      <tr>
        <td>Bicho</td>
        <td>${computeStats(dataPokemon, 'bug', 251)[0]}</td>
        <td>${computeStats(dataPokemon, 'bug', 251)[1]}%</td>
      </tr>

      <tr>
        <td>Electrico</td>
        <td>${computeStats(dataPokemon, 'electric', 251)[0]}</td>
        <td>${computeStats(dataPokemon, 'electric', 251)[1]}%</td>
      </tr>

      <tr>
        <td>Hada</td>
        <td>${computeStats(dataPokemon, 'fairy', 251)[0]}</td>
        <td>${computeStats(dataPokemon, 'fairy', 251)[1]}%</td>
      </tr>

      <tr>
        <td>Lucha</td>
        <td>${computeStats(dataPokemon, 'fighting', 251)[0]}</td>
        <td>${computeStats(dataPokemon, 'fighting', 251)[1]}%</td>
      </tr>

      <tr>
        <td>Volador</td>
        <td>${computeStats(dataPokemon, 'flying', 251)[0]}</td>
        <td>${computeStats(dataPokemon, 'flying', 251)[1]}%</td>
      </tr>

      <tr>
        <td>Fantasma</td>
        <td>${computeStats(dataPokemon, 'ghost', 251)[0]}</td>
        <td>${computeStats(dataPokemon, 'ghost', 251)[1]}%</td>
      </tr>

      <tr>
        <td>Tierra</td>
        <td>${computeStats(dataPokemon, 'ground', 251)[0]}</td>
        <td>${computeStats(dataPokemon, 'ground', 251)[1]}%</td>
      </tr>

      <tr>
        <td>Hielo</td>
        <td>${computeStats(dataPokemon, 'ice', 251)[0]}</td>
        <td>${computeStats(dataPokemon, 'ice', 251)[1]}%</td>
      </tr>

      <tr>
        <td>Fuego</td>
        <td>${computeStats(dataPokemon, 'fire', 251)[0]}</td>
        <td>${computeStats(dataPokemon, 'fire', 251)[1]}%</td>
      </tr>

      <tr>
        <td>Veneno</td>
        <td>${computeStats(dataPokemon, 'poison', 251)[0]}</td>
        <td>${computeStats(dataPokemon, 'poison', 251)[1]}%</td>""
      </tr>

      <tr>
        <td>Psiquico</td>
        <td>${computeStats(dataPokemon, 'psychic', 251)[0]}</td>
        <td>${computeStats(dataPokemon, 'psychic', 251)[1]}%</td>
      </tr>

      <tr>
        <td>Roca</td>
        <td>${computeStats(dataPokemon, 'rock', 251)[0]}</td>
        <td>${computeStats(dataPokemon, 'rock', 251)[1]}%</td>
      </tr>

      <tr>
        <td>Acero</td>
        <td>${computeStats(dataPokemon, 'steel', 251)[0]}</td>
        <td>${computeStats(dataPokemon, 'steel', 251)[1]}%</td>
      </tr>

      <tr>
        <td>Siniestro</td>
        <td>${computeStats(dataPokemon, 'dark', 251)[0]}</td>
        <td>${computeStats(dataPokemon, 'dark', 251)[1]}%</td>
      </tr>

      <tr>
        <td>dragon</td>
        <td>${computeStats(dataPokemon, 'dragon', 251)[0]}</td>
        <td>${computeStats(dataPokemon, 'dragon', 251)[1]}%</td>
      </tr>

        `
  tableContainer.appendChild(tablePokemon);
}



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

const selectSort = document.getElementById('select-sort')
selectSort.addEventListener('change', (event) => {
  let sortSelected = event.target.value;
  let sortPokemon = sort(dataPokemon, "name", sortSelected)

  displeyCard(sortPokemon)

})
const buttonStats = document.getElementById('Statistic')
buttonStats.addEventListener('click', () => {
  displayStats()
})


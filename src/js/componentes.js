import data from "../data/pokemon/pokemon.js"
const pokemones = data.pokemon;
import { filterPokemonByNumber, ordenarArrayAlfabeticamente, ordenarMayorAMenor } from "../data.js";

const modalAdd = document.querySelector('#modalAdd');

//const dragoncito = document.querySelector('#fa-solid fa-dragon');

const iconType = {
  bug: '<i class="fa-solid fa-bug"></i>',
  dark: '<i class="fa-solid fa-skull"></i>',
  dragon: '<i class="fa-solid fa-dragon"></i>',
  electric: '<i class="fa-solid fa-bolt"></i>',
  fairy: '<i class="fa-solid fa-star"></i>',
  fighting: '<i class="fa-solid fa-hand-fist"></i>',
  fire: '<i class="fa-solid fa-fire"></i>',
  flying: '<i class="fa-solid fa-dove"></i>',
  ghost: '<i class="fa-solid fa-ghost"></i>',
  grass: '<i class="fa-brands fa-pagelines"></i>',
  ground: '<i class="fa-solid fa-mountain"></i>',
  ice: '<i class="fa-regular fa-snowflake"></i>',
  normal: '<i class="fa-solid fa-cube"></i>',
  poison: '<i class="fa-solid fa-wine-bottle"></i>',
  psychic: '<i class="fa-solid fa-brain"></i>',
  rock: '<i class="fa-solid fa-gem"></i>',
  steel: '<i class="fa-solid fa-shield"></i>',
  water: '<i class="fa-solid fa-droplet"></i>',

}


export const visualizarPokemones = (arrayPokemones) => {    //esta función limpia al padre(listado-pokemones) y renderiza los componentes hijos(pokemon-item)  
  const listadoPokemones = document.getElementById('listado-pokemones')
  listadoPokemones.innerHTML = ''; //limpia el componente padre

  const numeroResultados = document.getElementById('numeroResultados')
  const porcentajeResultados = document.getElementById('porcentajeResultados')
  numeroResultados.innerHTML = `total pokemones: ${arrayPokemones.length}`;
  porcentajeResultados.innerHTML = `porcentaje pokemones encontrados: ${Math.round(arrayPokemones.length * 100 / 251)} %`;

  const htmlContainerPokemon = arrayPokemones.map(poke => {
    //incrustando la tarjeta pokemon--item con javaScript a html usando InnerHTML
    const pokemoncitoContainer = document.createElement("div")  //para crear un div
    const iconContainer = document.createElement("figure")
    iconContainer.classList.add("icon-item")
    pokemoncitoContainer.appendChild(iconContainer)
    pokemoncitoContainer.classList.add("pokemon-item")  //para crear una clase en el div
    const type = poke.type;
    // console.log(type);
    const iconTypsito1 = iconType[type[0]];
    const iconTypsito2 = iconType[type[1]];

    pokemoncitoContainer.innerHTML = `
      <h3>  ${poke.num} </h3>
      <h3> ${poke.name}</h3>
      <img  src="${poke.img}" >
      <!--<i class="fa-solid fa-bug"></i>-->
      
      <p>${iconTypsito1} ${iconTypsito2 ? iconTypsito2 : ""}</p>

   `;
    //pokemoncitoContainer.addEventListener(“click”, visualizarModalPokemones(poke.num))

    //  console.log(iconTypsito);
    //  iconContainer.innerHTML="hola";
    pokemoncitoContainer.addEventListener("click", () => visualizarModalPokemon(poke.num))
    return pokemoncitoContainer
  });
  // console.log(htmlContainerPokemones);
  /*listadoPokemones.innerHTML = htmlContainerPokemones variable que incrusta el listado de pokemones*/
  listadoPokemones.append(...htmlContainerPokemon) //inserta un set de 

}


const openModal = () => {
  modalAdd.style.display = 'flex';
}
export const closeModal = () => {
  modalAdd.style.display = 'none';
}



export function visualizarModalPokemon(numerito) {
  const [pokemon] = filterPokemonByNumber(numerito, pokemones);

  const type = pokemon.type;
  //console.log(type);
  const iconTypsito1 = iconType[type[0]];
  const iconTypsito2 = iconType[type[1]];

  //console.log(pokemon)
  openModal()
  const itemPokemon = document.getElementById('modalContainerPokemon');
  const modalPokemon = `
  <div class="informacion-pokemon" id="modal-pokemon">    
    <h3 class="nombrePokemon">${pokemon.name} </h3>
    <h3>${pokemon.num} </h3>
    <img  src="${pokemon.img}" >
    <h2>CARACTERÍSTICAS ESPECÍFICAS</h2>
    <h3>About: ${pokemon.about} </h3>   <img class="imgAcerca" src="img/imgFiguritas/acerca.png" alt="foquito">  
    <h3>Type: ${pokemon.type} </h3>
    <p>${iconTypsito1} ${iconTypsito2 ? iconTypsito2 : ""}</p>

    <h2>MODO COMBATE</h2>
    <h3>Fortalezas:${pokemon.resistant} </h3>
    <h3>Debilidades:${pokemon.weaknesses} </h3>


  </div>
 `;
  itemPokemon.innerHTML = modalPokemon;
}


export function ordenarPokemonesPorNombre() {

  var pokemonesOrdenados = pokemones.sort(ordenarArrayAlfabeticamente);
  //console.log(pokemonesOrdenados);
  visualizarPokemones(pokemonesOrdenados);

}


// export function ordenarPokemonesPorSpawnChance() {
//   console.log(pokemones);
//   const pokemonesAordenar = pokemones.filter(pokemones => parseFloat(pokemones.spawnchance) > 0);//convierte en flotantes los string (spawnchance de los pokemones)
//   console.log(pokemonesAordenar);
// }

export const dataGrafica = () => {
  let pokemonesAordenar = pokemones.filter(pokemones => parseFloat(pokemones['spawn-chance']) > 0);//convierte en flotantes los string (spawnchance de los pokemones)
  pokemonesAordenar = pokemonesAordenar.map(pokemon => ({
    name: pokemon.name,
    'spawn-chance': parseFloat(pokemon['spawn-chance'])   //spawn-chance va entre comillas simples porque contiene caracteres especiales

  })).sort(ordenarMayorAMenor)

  pokemonesAordenar = pokemonesAordenar.slice(0, 10);

  console.log(pokemonesAordenar);

  //desde aquí es la gráfica
  const $grafica = document.querySelector("#grafica");
  // Las etiquetas son las que van en el eje X.
  const etiquetas = pokemonesAordenar.map(pokemon=>pokemon.name); /*(nombre de los 10 pokemones)*/
  // Podemos tener varios conjuntos de datos. Comencemos con uno
  const datospokemones = {
    label: "Spawn chances",
    data: pokemonesAordenar.map(pokemon=>pokemon['spawn-chance']), // La data es un arreglo que debe tener la misma cantidad de valores que la cantidad de etiquetas
    backgroundColor: 'rgba(54, 162, 235, 0.2)', // Color de fondo
    borderColor: 'rgba(54, 162, 235, 1)', // Color del borde
    borderWidth: 1,// Ancho del borde
  };
  new Chart($grafica, {
    type: 'bar',// Tipo de gráfica
    data: {
      labels: etiquetas,
      datasets: [
        datospokemones,
        // Aquí más datos...
      ]
    },
    options: {
      scales: {
        yAxes: [{
          ticks: {
            beginAtZero: true
          }
        }],
      },
    }
  });
}

























// const nombrepokemonesAordenar = [];
// const spawnChancepokemonesAordenar = [];

// pokemonesAordenar.map(pokemon => {
//   nombrepokemonesAordenar.push(pokemon.name);
//   spawnChancepokemonesAordenar.push(parseFloat(pokemon['spawn-chance']));
// }
// )

// console.log(nombrepokemonesAordenar);
// console.log(spawnChancepokemonesAordenar);
 // const objetoSpawnChancesYNames[nombrepokemonesAordenar]=spawnChancepokemonesAordenar;


















// console.log(pokemonesAordenar);
  // let pokemonesOrdenados=pokemonesAordenar.sort((a, b) => {
  //   if (a == b) {
  //     return 0;
  //   }
  //   if (a < b) {
  //     return -1;
  //   }
  //   return 1;
  // });
  // console.log(pokemonesOrdenados);



/* crear array utilizando el campo de otro array
console.log(pokemones);
const pokemonAordenar=pokemones[0].name;
console.log(pokemonAordenar);
const pokemonesAordenar=[];
pokemones.map(pokemon=>{
 pokemonesAordenar.push(pokemon.name);
}
)  */





//  export const ordenarSCPokemones = (pokemones) => {

//  var spawnChances=[];
// //   pokemones.map(poke => {
// //   spawnChances=spawnChances.push(['poke.spawnchance'])

// // })
// for(let i=0;i<251;i++)
// {
//   spawnChances=spawnChances.push(pokemones[i].spawnchance)
// }
// console.log(spawnChances);

// }


//var spawnChance=pokemones.filter(pokemones=>pokemones.spawn-chance>=0);
//   pokemones.map(poke => {
//  spawnChance = poke[spawn-chance];

//  console.log(spawnChance);

//  })

// const spawnChanceOrdenado = ordenarMayorMenor(spawnChance);
// console.log(spawnChanceOrdenado);



//   return top10;


// var array1=[0.54, 0.96, 0.522, 0.101]
// array1.push(0.32);
// console.log(array1);

/*PARA MOSTRAR LOS DATOS EN LA PANTALLA interacción con el DOM. Operaciones como creación de nodos,
 registro de manejadores de eventos (event listeners o event handlers), ....*/

//IMPORTACIÓN DE MÓDULOS
// import { example } from './data.js';
//import pokemon from './data/pokemon/pokemon.js';
import data from './data/pokemon/pokemon.js';

const pokemones = data.pokemon;


//DECLARACIÓN DE VARIABLES
//const pokemonNames=pokemon.map(pokemon.name);

const listadoPokemones = document.getElementById('listado-pokemones')
// console.log(listadoPokemones)
// const htmlPrueba=`<h2>pokemonesV2</h2>`;//etiqueta html que se va a incrustar al contenedor ListadoPokemones 
// listadoPokemones.innerHTML=htmlPrueba

let htmlContainerPokemones = '';
pokemones.forEach(poke => {
  //incrustando la tarjeta pokemon--item con javaScript a html usando InnerHTML
  const pokemoncito = `
   <div class="pokemon-item">    
     <h3>el pokemon se llama ${poke.name} ${poke.num} </h3>
     <img  src="${poke.img}" >

   </div>
  `;
  // console.log(pokemoncito)
  htmlContainerPokemones = htmlContainerPokemones + pokemoncito

});
// console.log(htmlContainerPokemones);
listadoPokemones.innerHTML = htmlContainerPokemones  //variable que incrusta el listado de pokemones

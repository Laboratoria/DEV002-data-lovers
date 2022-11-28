/*PARA MOSTRAR LOS DATOS EN LA PANTALLA interacción con el DOM. Operaciones como creación de nodos,
 registro de manejadores de eventos (event listeners o event handlers), ....*/

//IMPORTACIÓN DE MÓDULOS
import { buscarPorInput, buscarPorTipo } from './data.js';
import { visualizarPokemones, visualizarModalPokemon } from './js/componentes.js';
import { pokemones } from './js/store.js';

//llamando a la funcion visualizarPokemones para mostrar todos los pokemones por defecto en mi página principal
visualizarPokemones(pokemones);

//llamando a la funcion visualizarModalPokemon para mostrar la información específica del pokemon cuando el usuario haga clic a un pokemon-item
visualizarModalPokemon(pokemones);

//funcion visualizarModalPokemon al hacer clic a un pokemon-item
const openModal = document.getElementById('pokemonItem')
openModal.addEventListener('click', visualizarModalPokemon)

//funcion buscar por imput de texto de nombre del pokemon
const inputSearch = document.getElementById('searchName')
inputSearch.addEventListener('input', buscarPorInput)

//funcion buscar por imput select de tipo del pokemon
const typeSearch= document.getElementById('select-tipos')
typeSearch.addEventListener("change",buscarPorTipo)










/*
const tiposPokemones = pokemones.map(pokemon=>pokemon.type);
//console.log(tiposPokemones)
tiposPokemones.reduce((accumulator, currentValue) => accumulator.concat(currentValue), []);
console.log(tiposPokemones)
for (let i=0;i<251;i++)
{
    if(tipos.value)
    const pokemonesTipoBug=pokemones.filter(pokemon=>pokemon.type=='bug')
}
*/
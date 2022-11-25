/*PARA MOSTRAR LOS DATOS EN LA PANTALLA interacción con el DOM. Operaciones como creación de nodos,
 registro de manejadores de eventos (event listeners o event handlers), ....*/

//IMPORTACIÓN DE MÓDULOS
import { buscarPorInput } from './data.js';
import { visualizarPokemones } from './js/componentes.js';
import { pokemones } from './js/store.js';

visualizarPokemones(pokemones);


const inputSearch = document.getElementById('searchName')

inputSearch.addEventListener('input', buscarPorInput)


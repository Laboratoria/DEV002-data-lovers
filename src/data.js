/*mis funciones para obtener, procesar y manipular datos*/
// estas funciones son de ejemplo

import { visualizarPokemones } from "./js/componentes.js";
import { pokemones } from "./js/store.js";

export const example = () => {
  return 'example';
};

export const anotherExample = () => {
  return 'OMG';
};

//ejemplo para testear agregado por nosotras
export function suma(a, b) {
  a=1.5;
  b=1.5;
  return a + b;
}


/*filterData(data, condition):
esta función filter o filtrar recibiría la data, y nos retornaría aquellos datos que sí cumplan con la condición.

sortData(data, sortBy, sortOrder): esta función sort u ordenar recibe tres parámetros. El primer parámetro, data, nos entrega los datos.
 El segundo parámetro, sortBy, nos dice con respecto a cuál de los campos de la data se quiere ordenar. El tercer parámetro, sortOrder, 
 indica si se quiere ordenar de manera ascendente o descendente.

computeStats(data): la función compute o calcular, nos permitirá hacer cálculos estadísticos básicos para ser mostrados de acuerdo a la
 data proporcionada.*/

  export const buscarPorInput = (e) => {
  const textoIngresado = e.target.value;//para obtener el valor del imput
  const pokemonesFiltrados = pokemones.filter(pokemon => pokemon.name.includes(textoIngresado))
  visualizarPokemones(pokemonesFiltrados)
}

export const buscarPorTipo=(e)=>{
  const tipoIngresado = e.target.value;//para obtener el tipo seleccionado
  const pokemonesFiltradosPorTipo = pokemones.filter(pokemon => pokemon.type.includes(tipoIngresado))
  visualizarPokemones(pokemonesFiltradosPorTipo)
};

//Función que filtra según el input ingresado
export const filter = (array, input) => array.filter(e => e.name.includes(input.toLowerCase()));

//Función para ordenar de manera ascendente 
export const sortUpward = (array, sortBy) => array.sort(function (a, b) {
  return a[sortBy] < b[sortBy] ? -1 : 0;
})

//Función para ordenar de manera descendente 
export const sortDownward = (array, sortBy) => array.sort(function (a, b) {
  return a[sortBy] > b[sortBy] ? -1 : 0;
})

export function calculatePercentage(array, modifiedArray) {
  let enteredPokemons = modifiedArray.length;
  let totalPokemons = array.length;
  let percentage = (enteredPokemons * 100) / totalPokemons
  return percentage.toFixed(2);
}

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

//Función que calcula el porcentaje del array de búsqueda
export function calculatePercentage(array, modifiedArray) {
  let enteredPokemons = modifiedArray.length;
  let totalPokemons = array.length;
  let percentage = (enteredPokemons * 100) / totalPokemons
  return percentage.toFixed(2);
}

//Función para dar el número de generaciones de la data pokemon
export const generations = (array,key1,key2) => 
array.reduce((acc,item) =>
acc.includes((item[key1])[key2]) ? acc : acc.concat((item[key1])[key2]), []);

//Función para contar el número de tipos de pokemons
export function types(array){
  const onlyType = array.map(e => e.type);
  const array1 = onlyType.join().split(",");
  const reduceType = array1.reduce((acc,item) =>
  acc.includes(item) ? acc : acc.concat(item), []);
  return(reduceType.length);
}


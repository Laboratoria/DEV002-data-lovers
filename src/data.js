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

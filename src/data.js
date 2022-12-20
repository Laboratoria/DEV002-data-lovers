// estas funciones son de ejemplo

export const example = () => {
  return 'example';
};

export const anotherExample = () => {
  return 'OMG';
};

export const filterBy = (string, data) => {
  // console.log (string, data.films)
  const result =  data.films.filter(movie => movie.director === string); // retorno implicito
  console.log(result)
  return result;
} 


//prueba de funcion filtrar
// function filtrar(data) {
//   for (let i = 2; data > i; i++) {
//     if (data % i === 0) {
//       return false;
//     }
//   }
//   return data > 1;
// }

// console.log(array.filter(filtrar)); // [2, 3, 5, 7, 11, 13]
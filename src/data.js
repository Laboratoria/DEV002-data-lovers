// estas funciones son de ejemplo

export const example = () => {
  return 'example';
};

export const anotherExample = () => {
  return 'OMG';
};
// DIRECTORES
export const filterBy = (string, data) => {
  // console.log (string, data.films)
  const result =  data.films.filter(movie => movie.director === string); // retorno implicito
  console.log(result);
  console.log("Resultado " + string);
  console.log("Total " + result.length);
  // contador.innerHTML = result.length;
  return result;
} 
// LANZAMIENTO
export const sortBy = (cloneData) => {
  const result = cloneSata.films.release_date.sort()
  //  => {
  //   return x.release_date.localeCompare(y.release_date);
  // });
  console.log(cloneData);
  console.log(result);
  return result;
}   
// // .filter(movie => movie.rt_score === string); // retorno implicito
  // cloneDataOriginal.sort((itemA, itemB) => {
  //   // return itemA.localeCompare(itemB);
  //   console.log(itemA);
  //   console.log(itemB);
  //   console.log(itemA - itemB);
  //   return itemA - itemB;
  // });
  // return cloneDataOriginal;
//   const years = data.films.sort(year => year.release_date === string);;
//   years.sort((a,b)=>a-b);  
//   console.log(years);
// data.films.sort(function (a, b) {
//   if (a.release_date > b.release_date) {
//     return 1;
//   }
//   if (a.release_date < b.release_date) {
//     return -1;
//   }
//   // a must be equal to b
//   return 0;
// }

// SCORE     ***CHECAR!!!!
// export const filterByScore = (string, data) => {
//   console.log (string, data.films)
//   const result =  data.films.filter(movie => movie.rt_score === string); // retorno implicito
//   console.log(result)
//   return result;
// } 
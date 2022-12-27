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
  console.log(result)
  return result;
} 
// LANZAMIENTO
export const sortBy = () => {
//   const years = data.films.sort(year => year.release_date === string);;
//   years.sort((a,b)=>a-b);  
//   console.log(years);
}

// SCORE     ***CHECAR!!!!
export const filterByScore = (string, data) => {
  console.log (string, data.films)
  const result =  data.films.filter(movie => movie.rt_score === string); // retorno implicito
  console.log(result)
  return result;
} 

// DIRECTORES
export const filterBy = (string, data) => {
  const result = data.filter(movie => movie.director === string);
  return result;
}
// LANZAMIENTO
export const sortByA = (data) => {
  const result = [...data].sort((a, b) => {
    if (a.release_date === b.release_date) {
      return 0;
    }
    if (a.release_date < b.release_date) {
      return -1;
    }
    return 1;
  });
  return result;
}
export const sortByD = (data) => {
  const result = [...data].sort((a, b) => {
    if (a.release_date === b.release_date) {
      return 0;
    }
    if (b.release_date < a.release_date) {
      return -1;
    }
    return 1;
  });
  return result;
}
// SCORE
export const filterByS = (min, max, data) => {
  const result = data.filter(movie => {
    return (movie.rt_score <= max && movie.rt_score >= min)
  });
  return result;
}
// MOSTRAR PORCENTAJE EN PANTALLA
export const calcular = (data, peliculasEnPantalla) => {
  let total = data.length; 
  let actual = peliculasEnPantalla.length;
  let multiplicar = (actual * 100);
  let division = (multiplicar / total);
  
  return division;
}
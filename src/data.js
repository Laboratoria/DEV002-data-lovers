
// estas funciones son de ejemplo

export const example = () => {
  return 'example';
};

export const anotherExample = () => {
  return 'OMG';
};

// DIRECTORES
export const filterBy = (string, data) => {
  const result =  data.films.filter(movie => movie.director === string); 
  return result;
} 
// LANZAMIENTO
export const sortByA = (data) => {
  const result = [...data.films].sort((a,b) => {
    if (a.release_date === b.release_date) {
      return 0;
    }
    if (a.release_date < b.release_date) {
      return -1;
    }
    return 1;
  });
    return result ;
} 
export const sortByD = (data) => {
  const result = [...data.films].sort((a,b) => {
    if (a.release_date === b.release_date) {
      return 0;
    }
    if ( b.release_date < a.release_date ) {
      return -1;
    }
    return 1;
  });
    return result ;
} 
// SCORE
export const filterByS = (min, max, data) => {
  const result =  data.films.filter(movie => {
    return (movie.rt_score <= max && movie.rt_score >= min)
  }); 
  return result;
} 
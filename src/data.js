export const operaciones = {

  //ordenar por directores
  peliculasOrdenadasPorDirector(peliculas) {
    peliculas = peliculas.sort((a, b) => {
      a = a.director.toLowerCase();
      b = b.director.toLowerCase();
      return a < b ? -1 : a > b ? 1 : 0;
    });
    return peliculas;
  },

    //ordenar por año
    peliculasOrdenadasPorAno(peliculas) {
      peliculas = peliculas.sort((a, b) => {
        a = a.release_date.toLowerCase();
        b = b.release_date.toLowerCase();
        return a < b ? -1 : a > b ? 1 : 0;
      });
      return peliculas;
    },
    
  
};

  

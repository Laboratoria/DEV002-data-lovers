//esto es un objeto que adentro tiene constantes y funciones
const operaciones = {
  //Esto es una función que recibe como argumento las películas
  llamarDirectores(peliculas) {
    let pelicula;
    let todosLosDirectores = [];
    //En este ciclo for recorrimos el array de películas y luego con el if trajimos los directores pero no cada vez que estuvieran presentes sino que vinieran sólo una vez.
    for (let i = 0; i < peliculas.length; i++) {
      pelicula = peliculas[i];

      if (!todosLosDirectores.includes(pelicula.director)) {
        todosLosDirectores.push(pelicula.director);
      }
    }

    return todosLosDirectores;
  },

  //Esto es una función que recibe como argumento las películas
  llamarProductores(peliculas) {
    let pelicula;
    let todosLosProductores = [];
    //En este ciclo for recorrimos el array de películas y luego con el if trajimos los directores pero no cada vez que estuvieran presentes sino que vinieran sólo una vez.
    for (let i = 0; i < peliculas.length; i++) {
      pelicula = peliculas[i];
      if (!todosLosProductores.includes(pelicula.producer)) {
        todosLosProductores.push(pelicula.producer);
      }
    }

    return todosLosProductores;
  },

  //ordenar por directores
  peliculasOrdenadasPorDirector(peliculas) {
    peliculas = peliculas.sort((a, b) => {
      a = a.director.toLowerCase();
      b = b.director.toLowerCase();
      return a < b ? -1 : a > b ? 1 : 0;
    });

    return peliculas;
  },

  compareStrings(a, b) {
    // Assuming you want case-insensitive comparison
    a = a.toLowerCase();
    b = b.toLowerCase();
    return a < b ? -1 : a > b ? 1 : 0;
  },
};

export default operaciones;

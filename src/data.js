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

  llamarImagenes(peliculas) {
    let pelicula;
    let todasLasImagenes = [];
    //En este ciclo for recorrimos el array de películas y luego con el if trajimos las imagenes//
    for (let i = 0; i < peliculas.length; i++) {
      pelicula = peliculas[i];
      if (!todasLasImagenes.includes(pelicula.poster)) {
        todasLasImagenes.push(pelicula.poster);
      }
    }
    return todasLasImagenes;
  },

  llamarInfoBasicaPelicula(peliculas) {
    let pelicula;
    let todasLasImagenes = [];
    //En este ciclo for recorrimos el array de películas y luego con el if trajimos las imagenes//
    for (let i = 0; i < peliculas.length; i++) {
      pelicula = peliculas[i];
      if (!todasLasImagenes.includes(pelicula.poster)) {
        todasLasImagenes.push(
          JSON.parse(
            '{"id": "' + pelicula.id + '","title": "' + pelicula.title + "}"
          )
        );
      }
    }
    return todasLasImagenes;
  },
};

export default operaciones;

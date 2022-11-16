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
};
export default operaciones;

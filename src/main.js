import operaciones from "./data.js";
import data from "./data/ghibli/ghibli.js";
//filtrar data

//Ordenar la data
//por directores
function ordenarPorDirector() {
  let peliculasOrdenadas = operaciones.peliculasOrdenadasPorDirector(
    data.films
  );
  dibujarCard(peliculasOrdenadas);
  // console.log(peliculasOrdenadas);
}

document
  .getElementById("btnordenardirector")
  .addEventListener("click", ordenarPorDirector);

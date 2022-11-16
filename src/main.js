import operaciones from "./data.js";
import data from "./data/ghibli/ghibli.js";

//console.log(operaciones.llamarDirectores(data.films));

function pintarDirectores() {
  let directoresHtml = "<h2>DIRECTORES</h2>";
  directoresHtml += "<ul>";

  let arregloDirectores = operaciones.llamarDirectores(data.films);

  for (let i = 0; i < arregloDirectores.length; i++) {
    console.log(arregloDirectores[i]);
  }

  // console.log(arregloDirectores);
  directoresHtml += "</ul>";
  directoresdiv.innerHTML += directoresHtml;
}
console.log(pintarDirectores());

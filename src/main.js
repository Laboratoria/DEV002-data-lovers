import operaciones from "./data.js";
import data from "./data/ghibli/ghibli.js";

//PINTA DIRECTORES
function pintarDirectores() {
  let directoresHtml = "<h2>Directores</h2>";
  directoresHtml += "<ul>";

  let arregloDirectores = operaciones.llamarDirectores(data.films);

  for (let i = 0; i < arregloDirectores.length; i++) {
    directoresHtml += "<li>";
    directoresHtml += arregloDirectores[i];
    directoresHtml += "</li>";
  }

  directoresHtml += "</ul>";
  directoresproductoresdiv.innerHTML += directoresHtml;
}
console.log(pintarDirectores());

//PINTA PRODUCTORES
function pintarProductores() {
  let directoresHtml = "<h2>Productores</h2>";
  directoresHtml += "<ul>";

  //CABIAS A llamarProductores
  let arregloDirectores = operaciones.llamarDirectores(data.films);

  for (let i = 0; i < arregloDirectores.length; i++) {
    directoresHtml += "<li>";
    directoresHtml += arregloDirectores[i];
    directoresHtml += "</li>";
  }

  directoresHtml += "</ul>";
  directoresproductoresdiv.innerHTML += directoresHtml;
}
console.log(pintarProductores());

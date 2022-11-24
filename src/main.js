import operaciones from "./data.js";
import data from "./data/ghibli/ghibli.js";

//PINTA DIRECTORES
//function pintarDirectores() {
//let directoresHtml = "<h2>Directores</h2>";
//directoresHtml += "<ul>";

//let arregloDirectores = operaciones.llamarDirectores(data.films);

// for (let i = 0; i < arregloDirectores.length; i++) {
//directoresHtml += "<li>";
//directoresHtml += arregloDirectores[i];
//directoresHtml += "</li>";
// }

//directoresHtml += "</ul>";
// directoresproductoresdiv.innerHTML += directoresHtml;
//}
//console.log(pintarDirectores());

//PINTA PRODUCTORES
//function pintarProducer() {
//let producerHtml = "<h2>Productores</h2>";
// producerHtml += "<ul>";

//CAMBIAR A llamarProductores
// let arregloProducer = operaciones.llamarProductores(data.films);

//for (let i = 0; i < arregloProducer.length; i++) {
//producerHtml += "<li>";
//producerHtml += arregloProducer[i];
//producerHtml += "</li>";
//}

//producerHtml += "</ul>";
// directoresproductoresdiv.innerHTML += producerHtml;
//}
//console.log(pintarProducer());

//pintar imagenes, año de lanzamiento y puntuación
//ESTO ES UNA PRUEBA CON OBJETOS para poder traer diferentes propiedades del elemento que conforma el Array
function pintarImagenes() {
  let imgHTML = "<h2> POSTERS</h2>";
  let arregloTodasLasImagenes = operaciones.llamarImagenes(data.films);

  for (let i = 0; i < arregloTodasLasImagenes.length; i++) {
    let pelicula;
    pelicula = data.films[i];
    imgHTML += '<div class="column">';
    imgHTML += '<div class="card">';
    imgHTML += '<img src="';
    imgHTML += pelicula.poster;
    imgHTML += '" style="width:130px">';

    imgHTML += "<h3>";
    imgHTML += pelicula.title;
    imgHTML += "</h3>";

    imgHTML += "<p>";
    imgHTML += "Año de lanzamiento:" + " " + pelicula.release_date;
    imgHTML += "</p>";

    imgHTML += "<p>";
    imgHTML += "Puntuación:" + pelicula.rt_score;
    imgHTML += "</p>";
    imgHTML += "</div>";
    imgHTML += "</div>";
  }

  llamarImagenesdiv.innerHTML += imgHTML;
}
console.log(pintarImagenes());

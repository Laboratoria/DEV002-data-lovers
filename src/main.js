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
function pintarProducer() {
  let producerHtml = "<h2>Productores</h2>";
  producerHtml += "<ul>";

  //CAMBIAR A llamarProductores
  let arregloProducer = operaciones.llamarProductores(data.films);

  for (let i = 0; i < arregloProducer.length; i++) {
    producerHtml += "<li>";
    producerHtml += arregloProducer[i];
    producerHtml += "</li>";
  }

  producerHtml += "</ul>";
  directoresproductoresdiv.innerHTML += producerHtml;
}
console.log(pintarProducer());

//pintar imagenes//
function pintarImagenes() {
  let imgHTML = "<h2> POSTERS</h2>";
  let arregloTodasLasImagenes = operaciones.llamarImagenes(data.films);

  for (let i = 0; i < arregloTodasLasImagenes.length; i++) {
    imgHTML += '<img src="';
    imgHTML += arregloTodasLasImagenes[i];
    imgHTML += '">';
  }

  llamarImagenesdiv.innerHTML += imgHTML;
}
console.log(pintarImagenes());

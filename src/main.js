import {operaciones} from "./data.js";
import data from "./data/ghibli/ghibli.js";

function pintarCard() {
  dibujarCard(data.films);
}

function dibujarCard(peliculas) {
  
  document.getElementById("llamarImagenesdiv").innerHTML = "";
  //llamarImagenesdiv.innerHTML = "";

  for (let i = 0; i < peliculas.length; i++) {
    let pelicula;
    let imgHTML='';
    pelicula = peliculas[i];

    let newDiv = document.createElement("div");
    newDiv.classList.add("column");
    newDiv.setAttribute("id", pelicula.id);

      imgHTML += '<div class="card">';

        imgHTML += '<img class="imgCard" src="';
        imgHTML += pelicula.poster;
        imgHTML += '">';

        imgHTML += "<h3>";
        imgHTML += pelicula.title;
        imgHTML += "</h3>";

        imgHTML += "<p>";
        imgHTML += "Año de lanzamiento:" + " " + pelicula.release_date;
        imgHTML += "</p>";

        imgHTML += "<h5>";
        imgHTML += "Director:" + " " + pelicula.director;
        imgHTML += "</h5>";

        imgHTML += "<p>";
        imgHTML += "Puntuación:" + pelicula.rt_score;
        imgHTML += "</p>";    

      imgHTML += "</div>";

    newDiv.insertAdjacentHTML('beforeend', imgHTML)
    newDiv.addEventListener("click", verDetallePelicula);

    document.getElementById("llamarImagenesdiv").appendChild(newDiv);
  }
}

//Ordenar la data por directores
function ordenarPorDirector() {
  let peliculasOrdenadas = operaciones.peliculasOrdenadasPorDirector(
    data.films
  );
  dibujarCard(peliculasOrdenadas);
}

//Ordenar la data por año
function ordenarPorAno() {
  let peliculasOrdenadas = operaciones.peliculasOrdenadasPorAno(
    data.films
  );
  
  dibujarCard(peliculasOrdenadas);
}

function verDetallePelicula() {
  alert("cualquier vaina" + this.id);
}

//pintar productores
function llamarProductores() {
  document.getElementById("directoresproductoresdiv").innerHTML = "<h2>Productores</h2>";

  //se crea el ul con javascript
  let newul = document.createElement("ul");

  //CAMBIAR A llamarProductores
  let arregloProducer = operaciones.llamarProductores(data.films);

  for (let i = 0; i < arregloProducer.length; i++) {

     //se crea el li con javascript
    let newli = document.createElement("li");
    newli.setAttribute("id", arregloProducer[i]);
    newli.innerHTML = newli.id;

    //mete los cucos (li) en la caja (ul)
    newul.appendChild(newli);
  }

  document.getElementById("directoresproductoresdiv").appendChild(newul);
}

function lanzadera(){
  //pintarDirectores();
 
  pintarCard();
  document.getElementById("btnordenardirector").addEventListener("click", ordenarPorDirector);
  document.getElementById("btnordenarano").addEventListener("click", ordenarPorAno);
  document.getElementById("btnmostrarproductores").addEventListener("click", llamarProductores);
}


window.onload = lanzadera;

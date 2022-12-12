import {operaciones} from "./data.js";
import data from './data/ghibli/ghibli.js';

function pintarCard() {
  dibujarCard(data.films);
}

function dibujarCard(peliculas) {
  document.getElementById("llamarImagenesdiv").innerHTML = "";

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
 
  let micc= this.id
  let pelicula= operaciones.filtrarPorId(data.films,micc);

  
  document.getElementById("MostrarDetalle").innerHTML = "";
  pelicula
}

//pintar productores
function pintarProductores() {
  document.getElementById("directoresproductoresdiv").innerHTML = "<h2>Productores</h2>";

  //se crea el select con javascript
  let newSelectProducer = document.createElement("select");
  newSelectProducer.setAttribute("id", "selectproductores");
  newSelectProducer.setAttribute("aria-label", "labelproductores");
  newSelectProducer.onchange= filtrarPorProductor;

  //CAMBIAR A llamarProductores
    let arregloProducer = operaciones.llamarProductores(data.films);

    //Agragando la opción OTROS
     let newOptionProducer = document.createElement("option");
    newOptionProducer.setAttribute("value","Todos los productores");
    newOptionProducer.setAttribute("label", "Todos los productores");
    //mete las opciones (nombre de los productores)  en la el combo para seleccionar (select)
    newSelectProducer.appendChild(newOptionProducer);
    //agrega al html
    newOptionProducer.innerHTML = newOptionProducer.id;
  for (let i = 0; i < arregloProducer.length; i++) {
     //se crea las opciones con javascript
    let newOptionProducer = document.createElement("option");
    newOptionProducer.setAttribute("value", arregloProducer[i]);
    newOptionProducer.setAttribute("label", arregloProducer[i]);
    //mete las opciones (nombre de los productores)  en la el combo para seleccionar (select)
    newSelectProducer.appendChild(newOptionProducer);
    //agrega al html
    newOptionProducer.innerHTML = newOptionProducer.id;
  }

  document.getElementById("directoresproductoresdiv").appendChild(newSelectProducer);
}

//filtrar por productor(
function filtrarPorProductor(){
   if(this.value =="Todos los productores"){
    pintarCard()
  }
  else {
    let peliculasPorProductor=operaciones.filtrarPorProductor(data.films, this.value );
    dibujarCard(peliculasPorProductor);
  }
}

function pintarPromedio(){
  let peliculasCalculadas = operaciones.realizarCalculo(
    data.films)
    document.getElementById("resultado").innerHTML=
    "promedio puntuación: " +peliculasCalculadas
}

function lanzadera(){
 
 
  pintarCard();
  pintarProductores();
  pintarPromedio();
  document.getElementById("btnordenardirector").addEventListener("click", ordenarPorDirector);
  document.getElementById("btnordenarano").addEventListener("click", ordenarPorAno);
 
  
}

window.onload = lanzadera;

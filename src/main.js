
//import { filtrarpeliculas } from './data.js';
// import data from './data/lol/lol.js';

import { filtrarPeliculas, ordenarAsc, ordenarDesc, promediar } from './data.js';

import data from './data/ghibli/ghibli.js';
// import data from './data/rickandmorty/rickandmorty.js';
let dataGhibli = data.films
//console.log(typeof dataGhibli)
let search = document.getElementById("search")
let orden = document.getElementById("ordenarPor")
let contenedorPromedio = document.getElementById("contenedorPromedio")
let cards = document.getElementById("cards")

document.getElementById("pantalla1").style.display = "flex";
document.getElementById("pantalla2").style.display = "none";

let inicio = document.getElementById("boton");

function mostrarPantallaDos() {

    document.getElementById("pantalla1").style.display = "none"
    document.getElementById("pantalla2").style.display = "inline"
    displayCards(dataGhibli)
    mostrarPromedio(dataGhibli, promediar)
}
 inicio.addEventListener ("click", mostrarPantallaDos);

const mostrarPromedio = (dataGhibli) => {
    
    let promedio1 = promediar(dataGhibli)
    contenedorPromedio.innerHTML = `
      el puntaje promedio es ${promedio1}
    `
}

const displayCards = (data) => {
    data.forEach(element => {
    let newDiv = document.createElement("div")
    newDiv.className = "card"

    newDiv.innerHTML += `
  
    <div class ="imgDatos" id="imgDatos">
    <img id="poster" src="${element.poster}"/>
    <div class ="parrafos">
    <p class ="parrafo titulo" id="title"> Título: ${element.title} </p>
    <p class ="parrafo" id="director"> Director: ${element.director} </p>
    <p class ="parrafo" id="releaseDate"> Año: ${element.release_date} </p>
    <p class ="parrafo" id="rtScore"> Puntaje: ${element.rt_score}</p>
    <button value="open" class="open ${element.id}"> descripción </button>
    </div>
    </div>
    <div class ="modalContainer" id = "${element.id}">
    <div class ="modal" id="modal">
    <h2 class ="modalTitle"> Descripción </h2>
    <p id="description"  class = "description">${element.description}</p>
    <button id="close"= class="close ${element.id}"> volver </button>
    </div>
    </div>
    `
  cards.appendChild(newDiv)
})


const open = document.querySelectorAll(".open");
//console.log(open)
const close = document.querySelectorAll(".close");

open.forEach(element => {
  element.addEventListener('click', (e) => {
    //console.log(e.target.classList[1])
    let modalContainer = document.getElementById(e.target.classList[1])
    modalContainer.classList.add("show");
    //console.log(modalContainer)
  });
})

close.forEach(element => {
  element.addEventListener('click', (e) => {
    //console.log(e.target.classList[1])
    let modalContainer = document.getElementById(e.target.classList[1])
    modalContainer.classList.remove("show");
  });
})
}

search.addEventListener("input",()=>{
  cards.innerHTML=""
  //console.log(filtrarPeliculas(dataGhibli,search.value))
  displayCards(filtrarPeliculas(dataGhibli,search.value))
});

orden.addEventListener("change",(e)=>{
  let seleccion = e.target.value;
  if (seleccion === "ascendente"){
    cards.innerHTML = ""
     displayCards(ordenarAsc(dataGhibli))
    }
  else if (seleccion === "descendente"){
    cards.innerHTML = ""
    displayCards(ordenarDesc(dataGhibli))
  }
})
  
  function mostrarPromedio (data,promediar)
    let calculo= document.createElement("div")
  calculo.innerHTML = `promedio mejores peliculas {$element.director}`
  mostrarPromedio.appendChild(calculo)
  
  
  
  



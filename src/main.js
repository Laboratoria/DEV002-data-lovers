import { example } from './data.js';
// import data from './data/lol/lol.js';
import data from './data/ghibli/ghibli.js';
// import data from './data/rickandmorty/rickandmorty.js';

//console.log(example, data);
//console.log (data.films[0].poster)

//const prueba = document.getElementById("prueba")
//prueba.innerHTML = ` 
//<div class= "prueba"> ${data.films[0].director} ${data.films[0].title}</div>
//<img src="${data.films[0].poster}" />`


let cards = document.getElementById("cards")

document.getElementById("pantalla1").style.display = "inline";
document.getElementById("pantalla2").style.display = "none";

let inicio = document.getElementById("boton");
inicio.addEventListener("click", Mostrarpantalla2);
function Mostrarpantalla2() {
  document.getElementById("pantalla1").style.display = "none"
  document.getElementById("pantalla2").style.display = "inline"
}

data.films.forEach(element => {

  let newDiv = document.createElement("div")
  newDiv.className = "card"
  cards.appendChild(newDiv)

  newDiv.innerHTML += `
    <div class ="imgDatos">
    <img id="poster" src="${element.poster}"/>
    <div class ="parrafos">
    <p class ="parrafo" id="title" class="title"> Título: ${element.title} </p>
    <p class ="parrafo" id="director"> Director: ${element.director} </p>
    <p class ="parrafo" id="releaseDate"> Año: ${element.release_date} </p>
    <p class ="parrafo" id="rtScore"> Puntaje: ${element.rt_score}</p>
    <button id="open" class="open"> descripción </button>
    </div>
    </div>
    <div class ="modalContainer" id = "${element.id}">
    <div class ="modal" id="modal">
    <h2 class ="modalTitle"> Descripción </h2>
    <p id="description"  class = "description">${element.description}</p>
    <button id="close"= class="close"> volver </button>
    </div>
    </div>
    `
})

let description = document.querySelector(".modal")
console.log(description)
const open = document.querySelector(".open");
const close = document.querySelector(".close");

open.addEventListener('click', () => {
  modalContainer.classList.add('show');
});

close.addEventListener('click', () => {
  modalContainer.classList.remove('show');
});


//console.log (data.films.forEach(element => console.log(element)))

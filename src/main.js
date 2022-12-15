
//import { filtrarpeliculas } from './data.js';
// import data from './data/lol/lol.js';
import { filtrarpeliculas } from './data.js';
import data from './data/ghibli/ghibli.js';
// import data from './data/rickandmorty/rickandmorty.js';
let dataGhibli = data.films
let search = document.getElementById("search")
let busqueda=document.getElementById("search").value
//let search = dataGhibli[0].title
//console.log(search)
//console.log(dataGhibli);
//console.log (data.films[0].poster)

//const prueba = document.getElementById("prueba")
//prueba.innerHTML = ` 
//<div class= "prueba"> ${data.films[0].director} ${data.films[0].title}</div>
//<img src="${data.films[0].poster}" />`

let cards = document.getElementById("cards")

document.getElementById("pantalla1").style.display = "inline";
document.getElementById("pantalla2").style.display = "none";

let inicio = document.getElementById("boton");

function Mostrarpantalla2() {

    document.getElementById("pantalla1").style.display = "none"
    document.getElementById("pantalla2").style.display = "inline"


//const displayCard = (data) => {
    //cards.innerHTML = ""
data.films.forEach(element => {
    let newDiv = document.createElement("div")
    newDiv.className = "card"

    newDiv.innerHTML += `
  
    <div class ="imgDatos" id="imgDatos">
    <img id="poster" src="${element.poster}"/>
    <div class ="parrafos">
    <p class ="parrafo" id="title" class="title"> Título: ${element.title} </p>
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
 }

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

search.addEventListener("input",()=>{
  cards.innerHTML=""
cards(filtrarpeliculas(dataGhibli,busqueda))
});
console.log(busqueda)
//}

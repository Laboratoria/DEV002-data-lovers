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
document.getElementById("pantalla1").style.visibility = "visible";
document.getElementById("pantalla2").style.visibility = "hidden";


data.films.forEach(element => {

    let newDiv = document.createElement("div")
    newDiv.className = "card"
    cards.appendChild(newDiv)

    newDiv.innerHTML += `
    <div class ="imgDatos">
    <div class="poster"><img id="poster" src="${element.poster}"/></div>
    <div class ="parrafos">
    <p class ="parrafo" id="title" class="title"> Título: ${element.title} </p>
    <p class ="parrafo" id="director"> Director: ${element.director} </p>
    <p class ="parrafo" id="releaseDate"> Año: ${element.release_date} </p>
    <p class ="parrafo" id="rtScore"> Puntaje: ${element.rt_score}</p>
    </div>
    </div>
    <div class = "description">
    <p id="description"> Descripción ${element.description}</p>
    </div>
     `

})

let inicio = document.getElementById("boton");
inicio.addEventListener("click", Mostrarpantalla2);
function Mostrarpantalla2() {
    document.getElementById("pantalla1").style.display = "none"
    document.getElementById("pantalla2").style.visibility = "visible"
}

//console.log (data.films.forEach(element => console.log(element)))
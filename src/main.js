import { example } from './data.js';
// import data from './data/lol/lol.js';
import data from './data/ghibli/ghibli.js';
// import data from './data/rickandmorty/rickandmorty.js';

console.log(example, data);


const poster = document.getElementById("poster")
poster.innerHTML = ` <figure><img src="${data.films[0].poster}"</figure> `

const titulo = document.getElementById("titulo")
titulo.innerHTML = ` <p id= "titulo"> ${data.films[0].title} </p> `

const datos = document.getElementById("datos")
datos.innerHTML = ` <p id= "datos"> Director: ${data.films[0].director} <br> Productor: ${data.films[0].producer} <br> Lanzamiento: ${data.films[0].release_date} <br> Score: ${data.films[0].rt_score}</p>`


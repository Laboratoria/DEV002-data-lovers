import { example } from './data.js';
// import data from './data/lol/lol.js';
import data from './data/ghibli/ghibli.js';
// import data from './data/rickandmorty/rickandmorty.js';

//console.log(example, data);
//console.log (data.films[0].poster)

const prueba = document.getElementById("prueba")
//prueba.innerHTML = ` 
//<div class= "prueba"> ${data.films[0].director} ${data.films[0].title}</div>
//<img src="${data.films[0].poster}" />`

data.films.forEach(element=> {
    prueba.innerHTML += ` 
    <div class= "prueba"> Director: ${element.director} Título: ${element.title} ${element.description} ${element.release_date} ${element.rt_score}</div>
    <img src="${element.poster}"/>`


     
})

//console.log (data.films.forEach(element => console.log(element)))
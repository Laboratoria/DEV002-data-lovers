import { example } from './data.js';
// import data from './data/lol/lol.js';
import data from './data/ghibli/ghibli.js';
// import data from './data/rickandmorty/rickandmorty.js';
import { filterBy } from './data.js';
import { sortBy } from './data.js';
// import { filterByScore } from './data.js';

console.log(example, data);

const tarjetas = document.getElementById("tarjetas");
data.films.forEach(element => {
    const tarjeta = `
    <div class="contenedor"> 
          <section class="imagen"><figure><img id="poster" src="${element.poster}"</figure></section>
          <section class="texto">
            <p id= "titulo"> ${element.title}</p>
            <p id= "datos"> Director: ${element.director} <br> Productor: ${element.producer} <br> Lanzamiento: ${element.release_date} <br> Score: ${element.rt_score}</p>
          </section>
    </div>
    `
    tarjetas.innerHTML += tarjeta
});

if (todas) {
// BOTÓN TODAS 
  document.getElementById("todas").addEventListener("click",function() {
  const tarjetas = document.getElementById("tarjetas");
  tarjetas.innerHTML = "";
  console.log (tarjetas);
data.films.forEach(element => {
    const tarjeta = `
    <div class="contenedor"> 
          <section class="imagen"><figure><img id="poster" src="${element.poster}"</figure></section>
          <section class="texto">
            <p id= "titulo"> ${element.title}</p>
            <p id= "datos"> Director: ${element.director} <br> Productor: ${element.producer} <br> Lanzamiento: ${element.release_date} <br> Score: ${element.rt_score}</p>
          </section>
    </div>
    `
    tarjetas.innerHTML += tarjeta});
    console.log ("Mostrar Todas");
  });
} 

// BOTONES DIRECTORES
document.getElementById("directores").addEventListener("click",function(event) { 
  console.log (event.target.id);
  let director = filterBy(event.target.id, data); //enviar dos argumentos
  //enlazar función filter de data.js
  tarjetas.innerHTML = "";
  director.forEach(element => {
    const tarjeta = `
    <div class="contenedor"> 
          <section class="imagen"><figure><img id="poster" src="${element.poster}"</figure></section>
          <section class="texto">
            <p id= "titulo"> ${element.title}</p>
            <p id= "datos"> Director: ${element.director} <br> Productor: ${element.producer} <br> Lanzamiento: ${element.release_date} <br> Score: ${element.rt_score}</p>
          </section>
    </div>
    `
    tarjetas.innerHTML += tarjeta});
    // let menu = document.getElementById("menu-principal");
    // menu.style.display = "none"; //si quiero seleccionar otra cosa ya no me deja
});

const dataOriginal =  data.films
const cloneData = Object.assign({}, dataOriginal);
console.log (data.films)
console.log(cloneData)

// BOTONES LANZAMIENTO
document.getElementById("ordenAsc").addEventListener("click",function(event) { 
  console.log ("Muestra Más recientes");
  //enlazar función filter de data.js
 
  let year = sortBy(event.target.release_date, cloneData);
  tarjetas.innerHTML = "";
  year.forEach(element => {
    const tarjeta = `
    <div class="contenedor"> 
          <section class="imagen"><figure><img id="poster" src="${element.poster}"</figure></section>
          <section class="texto">
            <p id= "titulo"> ${element.title}</p>
            <p id= "datos"> Director: ${element.director} <br> Productor: ${element.producer} <br> Lanzamiento: ${element.release_date} <br> Score: ${element.rt_score}</p>
          </section>
    </div>
    `
    tarjetas.innerHTML += tarjeta});
    // let menu = document.getElementById("menu-principal");
    // menu.style.display = "none"; //si quiero seleccionar otra cosa ya no me deja
});

// //BOTONES SCORES  ***CHECAR!!!!
// document.getElementById("scores").addEventListener("click",function(event) { 
//   console.log (event.target.rt_score);
//   let score = filterByScore(event.target.rt_score, data); //enviar dos argumentos
//   //enlazar función filter de data.js
//   tarjetas.innerHTML = "";
//   score.forEach(element => {
//     const tarjeta = `
//     <div class="contenedor"> 
//           <section class="imagen"><figure><img id="poster" src="${element.poster}"</figure></section>
//           <section class="texto">
//             <p id= "titulo"> ${element.title}</p>
//             <p id= "datos"> Director: ${element.director} <br> Productor: ${element.producer} <br> Lanzamiento: ${element.release_date} <br> Score: ${element.rt_score}</p>
//           </section>
//     </div>
//     `
//     tarjetas.innerHTML += tarjeta});
    
//     // let menu = document.getElementById("menu-principal");
//     // menu.style.display = "none"; //si quiero seleccionar otra cosa ya no me deja
// });



// const poster = document.getElementById("poster")
// poster.innerHTML = ` <figure><img src="${data.films[0].poster}"</figure> `

// const titulo = document.getElementById("titulo")
// titulo.innerHTML = ` <p id= "titulo"> ${data.films[0].title} </p> `

// const datos = document.getElementById("datos")
// datos.innerHTML = ` <p id= "datos"> Director: ${data.films[0].director} <br> Productor: ${data.films[0].producer} <br> Lanzamiento: ${data.films[0].release_date} <br> Score: ${data.films[0].rt_score}</p>`

// document.getElementById("contador").innerHTML = result.length;

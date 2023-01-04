import { example } from './data.js';
import data from './data/ghibli/ghibli.js';
// import data from './data/rickandmorty/rickandmorty.js';
import { filterBy, sortByA, sortByD, filterByS } from './data.js';

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
});
} 
// BOTONES DIRECTORES
document.getElementById("directores").addEventListener("click",function(event) { 
  //console.log (event.target.id);
  let director = filterBy(event.target.id, data); 
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
    //let menu = document.getElementById("menu-principal");
    //menu.style.display = "none";
});
// BOTONES LANZAMIENTO
document.getElementById("ordenAsc").addEventListener("click",function() { 
  let ordenar = sortByD(data);
  tarjetas.innerHTML = "";
  ordenar.forEach(element => {
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
}); 
document.getElementById("ordenDes").addEventListener("click",function() { 
  let ordenar = sortByA(data);
  tarjetas.innerHTML = "";
  ordenar.forEach(element => {
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
}); 
//BOTONES SCORES 
document.getElementById("less69").addEventListener("click",function(event) { 
  console.log (event.target.rt_score);
  let score = filterByS(0, 69, data); 
  tarjetas.innerHTML = "";
  score.forEach(element => {
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
});
document.getElementById("70-80").addEventListener("click",function(event) { 
  console.log (event.target.rt_score);
  let score = filterByS(70, 80, data); 
  tarjetas.innerHTML = "";
  score.forEach(element => {
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
});
document.getElementById("81-85").addEventListener("click",function(event) { 
  console.log (event.target.rt_score);
  let score = filterByS(81, 85, data);
  tarjetas.innerHTML = "";
  score.forEach(element => {
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
});
document.getElementById("86-90").addEventListener("click",function(event) { 
  console.log (event.target.rt_score);
  let score = filterByS(86, 90, data); 
  tarjetas.innerHTML = "";
  score.forEach(element => {
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
});
document.getElementById("91-95").addEventListener("click",function(event) { 
  console.log (event.target.rt_score);
  let score = filterByS(91, 95, data);
  tarjetas.innerHTML = "";
  score.forEach(element => {
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
});
document.getElementById("96-100").addEventListener("click",function(event) { 
  console.log (event.target.rt_score);
  let score = filterByS(96, 100, data); 
  tarjetas.innerHTML = "";
  score.forEach(element => {
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
});
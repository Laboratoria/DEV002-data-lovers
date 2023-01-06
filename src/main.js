import data from './data/ghibli/ghibli.js';
import { filterBy, sortByA, sortByD, filterByS, calcular } from './data.js';
const dataG = data.films;
const tarjetas = document.getElementById("tarjetas");
const contPorcentaje = document.getElementById("contador");

const display = (dataGhibli) => {
  tarjetas.innerHTML = "";
  const result = calcular(dataG, dataGhibli)
  contPorcentaje.innerHTML = `<p>Total en porcentaje: ${result}%</p>`
  dataGhibli.forEach(element => {
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
}
display(dataG);

// BOTÓN TODAS 
document.getElementById("todas").addEventListener("click", function () {
  display(dataG)
});


// BOTONES DIRECTORES
document.getElementById("directores").addEventListener("click", function (event) {
  //console.log (event.target.id);
  let director = filterBy(event.target.id, dataG);
  console.log(director);
  display(director)

});
// BOTONES LANZAMIENTO
document.getElementById("ordenAsc").addEventListener("click", function () {
  let ordenar = sortByD(dataG);
  display(ordenar);
});

document.getElementById("ordenDes").addEventListener("click", function () {
  let ordenar = sortByA(dataG);
  display(ordenar);
});

//BOTONES SCORES 
document.getElementById("less69").addEventListener("click", function (event) {
  console.log(event.target.rt_score);
  let score = filterByS(0, 69, dataG);
  display(score);
});
document.getElementById("70-80").addEventListener("click", function (event) {
  console.log(event.target.rt_score);
  let score = filterByS(70, 80, dataG);
  display(score);
});

document.getElementById("81-85").addEventListener("click", function (event) {
  console.log(event.target.rt_score);
  let score = filterByS(81, 85, dataG);
  display(score);
});

document.getElementById("86-90").addEventListener("click", function() {
  let score = filterByS(86, 90, dataG);
  display(score);
});

document.getElementById("91-95").addEventListener("click", function (event) {
  console.log(event.target.rt_score);
  let score = filterByS(91, 95, dataG);
  display(score);
});

document.getElementById("96-100").addEventListener("click", function() {
  let score = filterByS(96, 100, dataG);
  display(score);
});

//MOSTRAR PORCENTAJE EN PANTALLA

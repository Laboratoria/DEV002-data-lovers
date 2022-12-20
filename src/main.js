import { example } from './data.js';
// import data from './data/lol/lol.js';
import data from './data/ghibli/ghibli.js';
// import data from './data/rickandmorty/rickandmorty.js';

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
  //botón todas
  document.getElementById("todas").addEventListener("click",function() {
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
    tarjetas.innerHTML += tarjeta});
    console.log ("Mostrar Todas");
  });
} 
//botón Hayao
document.getElementById("hayao").addEventListener("click",function() { 
  console.log ("Muestra Hayao M");
  //enlazar función filter de data.js
});

document.getElementById("reciente").addEventListener("click",function() { 
  console.log ("Muestra Más recientes")
  //enlazar función filter de data.js
});



//botón hayao
// document.getElementById("hayao").addEventListener("click",function() {
//   let offset = document.getElementById("clave").value;
//   let string = document.getElementById("input-original").value;
//   document.getElementById("texto-cifrado").value = hayao.encode(offset, string);
// });

// const poster = document.getElementById("poster")
// poster.innerHTML = ` <figure><img src="${data.films[0].poster}"</figure> `

// const titulo = document.getElementById("titulo")
// titulo.innerHTML = ` <p id= "titulo"> ${data.films[0].title} </p> `

// const datos = document.getElementById("datos")
// datos.innerHTML = ` <p id= "datos"> Director: ${data.films[0].director} <br> Productor: ${data.films[0].producer} <br> Lanzamiento: ${data.films[0].release_date} <br> Score: ${data.films[0].rt_score}</p>`


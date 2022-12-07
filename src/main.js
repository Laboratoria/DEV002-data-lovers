import { anotherExample, filtro, obtenerDatos } from './data.js';
// console.log(anotherExample, data);

const refreshPage = document.getElementById('btn-refresh');

refreshPage.addEventListener("click",  () => {
    window.location.reload(true);
})

let datos = [];

const cargarAPIhp = document.querySelector('#cargarAPI');
cargarAPIhp.addEventListener('click', () => {
  obtenerDatos().then(resultado => {
    datos = resultado;
    mostrarHTML(datos);
  });
});

const btnGrif = document.getElementById('gryfindor');
btnGrif.addEventListener('click', () => {
  mostrarHTML(filtro(datos, 'Gryffindor'));
});

const btnHuf = document.getElementById('hufflepuff');
btnHuf.addEventListener('click', () => {
  mostrarHTML(filtro(datos, 'Hufflepuff'));
});

const btnRav = document.getElementById('ravenclaw');
btnRav.addEventListener('click', () => {
  mostrarHTML(filtro(datos, 'Ravenclaw'));
});

const btnSly = document.getElementById('slytherin');
btnSly.addEventListener('click', () => {
  mostrarHTML(filtro(datos, 'Slytherin'));
});


function mostrarHTML(datosAMostrar) {
  console.log(datosAMostrar);
  const contenido = document.querySelector('.tarjetas');
  console.log(contenido);
  let html = '';
  datosAMostrar.forEach(personaje => {
    console.log(personaje);
    const { name, house, image } = personaje;
    html += `<p> Nombre: ${name} Casa: ${house}</p>  <img src="">`;
    html += `<img class='foto' src="${image}">`;

  });
  contenido.innerHTML = html;
}


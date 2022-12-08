import { filtro, obtenerDatos } from './data.js';

let datos = [];

const refreshPage = document.getElementById('btn-refresh');
const cargarAPIhp = document.querySelector('#cargarAPI');

refreshPage.addEventListener("click",  () => {
    window.location.reload(true);
})
window.onload = () => {
  obtenerDatos().then(resultado => {
    datos = resultado;
  })
}
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
  const contenido = document.getElementById('cards');
  contenido.innerHTML = '';//para que quede vacio antes de mostrar la funcion a realizar, si no se iba hasta abajo
  datosAMostrar.forEach((personaje) => {
    let divCard = document.createElement("div");
    // let imgCard = document.createElement("img");
    let divContent = document.createElement("div");
    let hName = document.createElement("h2");
    let hHouse = document.createElement("h2");
    let hSpecie = document.createElement("h2");

    divCard.className = "card";
    // imgCard.style.width = '100%';
    divContent.className= "containerCard";
    hName.innerHTML = personaje.name;
    hHouse.innerHTML = personaje.house;
    hSpecie.innerHTML = personaje.species;

    contenido.appendChild(divCard);
    // divCard.appendChild(imgCard);
    divCard.appendChild(divContent);
    divContent.appendChild(hName);
    divContent.appendChild(hHouse);
    divContent.appendChild(hSpecie);

  });
}



import { filtro, obtenerDatos } from './data.js';

let datos = [];

const refreshPage = document.getElementById('btn-refresh');
const cargarAPIhp = document.querySelector('#cargarAPI');

refreshPage.addEventListener("click", () => {
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
    let divContent = document.createElement("div");
    let hName = document.createElement("h2");
    let hHouse = document.createElement("h2");
    let hSpecie = document.createElement("h2");
    let hatIcon = document.createElement("img");    

    divCard.className = "card";
    divContent.className = "infoCard";
    hName.innerHTML = personaje.name;
    hHouse.innerHTML = personaje.house;
    hSpecie.innerHTML = personaje.species;
    hatIcon.src = "./images/tinified/haticon.png";
    hatIcon.className = "hat-icon";

    
    switch (personaje.house) {
      case "Gryffindor":
        hHouse.style.color = "#740001";
        break;
      case "Slytherin":
        hHouse.style.color = "#2A623D";
        break;
        case "Hufflepuff":
          hHouse.style.color = "#F0C75E";
        break;
        case "Ravenclaw":
          hHouse.style.color = "#728DDA"

      default:
        break;

    }

    contenido.appendChild(divCard);
    divCard.appendChild(divContent);
    divContent.appendChild(hatIcon);
    divContent.appendChild(hName);
    divContent.appendChild(hHouse);
    divContent.appendChild(hSpecie);
    

  })};

  // if (personaje.house == "gryffindor") {
  //   hHouse.style.color = "#740001";
  // } else if (personaje.house == "Hufflepuff") {
  //   hHouse.style.color = "#F0C75E";
  // } else if (personaje.house == "Slytherin") {
  //   hHouse.style.color = "#2A623D";
  // } else if (personaje.house == "Ravenclaw") {
  //   hHouse.style.color = "#728DDA";
  // } else {
  //   hHouse.style.color = "gray";
  // }





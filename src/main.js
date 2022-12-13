import { filtro, obtenerDatos, orderAZ, calcularPorcentaje} from './data.js';

let datos = [];
let sectionOne = document.getElementById("indexOne")
const iconoOrderAZ = document.getElementById('orderAZ');
const spanPorcentajeMujeres = document.getElementById('spanPorcentajeMujeres');
const spanPorcentajeHombres = document.getElementById('spanPorcentajeHombres');
const divPorcentaje = document.getElementById('percentageBox')
const btnSly = document.getElementById('slytherin');
const btnRav = document.getElementById('ravenclaw');
const btnHuf = document.getElementById('hufflepuff');
const btnGrif = document.getElementById('gryfindor');
const refreshPage = document.getElementById('btn-refresh');
const cargarAPIhp = document.querySelector('#cargarAPI');


cargarAPIhp.addEventListener('click', () => {
  obtenerDatos().then(resultado => {
    datos = resultado;
    mostrarHTML(datos);
  });
});

cargarAPIhp.addEventListener('click', () => {
  iconoOrderAZ.style.display = "block";
  sectionOne.style.display = "none";
});

cargarAPIhp.addEventListener('click', () => {
  divPorcentaje.style.display = "block";
})

cargarAPIhp.addEventListener('click', () => {
  const { porcentajeMujeres, porcentajeHombres } = calcularPorcentaje(datos);
  console.log(calcularPorcentaje(datos));
  spanPorcentajeHombres.innerHTML = porcentajeHombres + "%";
  spanPorcentajeMujeres.innerHTML = porcentajeMujeres + "%";
});



refreshPage.addEventListener("click", () => {
  window.location.reload(true);
})
window.onload = () => {
  obtenerDatos().then(resultado => {
    datos = resultado;
  })
};


iconoOrderAZ.addEventListener("click", () => {
  mostrarHTML(orderAZ(datos));
})

btnGrif.addEventListener('click', () => {
  mostrarHTML(filtro(datos, 'Gryffindor'));
  sectionOne.style.display = "none";
  iconoOrderAZ.style.display = "block";
});

btnHuf.addEventListener('click', () => {
  mostrarHTML(filtro(datos, 'Hufflepuff'));
  sectionOne.style.display = "none";
  iconoOrderAZ.style.display = "block";
});

btnRav.addEventListener('click', () => {
  mostrarHTML(filtro(datos, 'Ravenclaw'));
  sectionOne.style.display = "none";
  iconoOrderAZ.style.display = "block";
});

btnSly.addEventListener('click', () => {
  mostrarHTML(filtro(datos, 'Slytherin'));
  sectionOne.style.display = "none";
  iconoOrderAZ.style.display = "block";
});

function mostrarHTML(datosAMostrar) {
  const contenido = document.getElementById('cards');
  contenido.innerHTML = '';//para que quede vacio antes de mostrar la funcion a realizar, si no se iba hasta abajo
  datosAMostrar.forEach((personaje) => {
    let divCard = document.createElement("div");
    let divContent = document.createElement("div");
    let hName = document.createElement("h2");
    let hHouse = document.createElement("h1");
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
      case "Gryffindor (possibly)":
        hHouse.style.color = "#740001";
      break;
      case "Slytherin":
        hHouse.style.color = "#2A623D";
      break;
      case "Slytherin (possibly)":
        hHouse.style.color = "#2A623D";
      break;
      case "Hufflepuff":
          hHouse.style.color = "#EEBE44";
      break;
      case "Hufflepuff (likely)":
          hHouse.style.color = "#EEBE44";
      break;
      case "Ravenclaw":
          hHouse.style.color = "#5E7DD4"
      break;
      case "Ravenclaw (possibly)":
          hHouse.style.color = "#5E7DD4"
      break;

    }


    contenido.appendChild(divCard);
    divCard.appendChild(divContent);
    divContent.appendChild(hatIcon);
    divContent.appendChild(hName);
    divContent.appendChild(hHouse);
    divContent.appendChild(hSpecie);
    

  })}


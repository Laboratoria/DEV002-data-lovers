import { filtro, obtenerDatos, orderAZ, orderZA, calcularPorcentaje} from './data.js';

// Guarda el universo (todos los personajes)
let datos = [];
// Guarda datos por casa en caso de estar filtrado (esta variable es la que se va a mostrar en pantalla)
let datosFiltrados = [];
// Guarda el status del ordenamiento (estados posibles '', 'asc', 'des')
let order = '';

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

// Esta funcion se ejecuta al iniciar la pagina
window.onload = () => {
  obtenerDatos().then(resultado => {
    datos = resultado;
  })
};

cargarAPIhp.addEventListener('click', () => {
  datosFiltrados = datos; // hace que los datos a mostrar sean igual que el universo
  mostrarHTML();
  iconoOrderAZ.style.display = "block";//cuando das click aparece el iconoAZ
  sectionOne.style.display = "none";// oculta la seccion 1(titulo y subtitulo) al dar click 
  
});

refreshPage.addEventListener("click", () => {
  window.location.reload(true);
})

// Al dar click en ordenamiento, va a cambiar el estado. 
// En caso de no estar ordenado (''), lo convertirá en estado ascendente ('asc')
// En caso de estar ordenado ascendente ('asc'), lo convertirá en estado descendente ('des')
// En caso de estar ordenado descendente ('des'), lo convertirá en estado ascendente ('asc')
iconoOrderAZ.addEventListener("click", () => {
  switch (order) {
    case '':
      order = 'asc';
      break;
    case 'asc':
      order = 'des';
      break;
    case 'des':
      order = 'asc';
  }
  mostrarHTML();
})

btnGrif.addEventListener('click', () => {
  datosFiltrados = filtro(datos, 'Gryffindor'); // hace que los datos a mostrar sean solo los de la casa
  mostrarHTML();
  sectionOne.style.display = "none";
  iconoOrderAZ.style.display = "block";
});

btnHuf.addEventListener('click', () => {
  datosFiltrados = filtro(datos, 'Hufflepuff'); // hace que los datos a mostrar sean solo los de la casa
  mostrarHTML();
  sectionOne.style.display = "none";
  iconoOrderAZ.style.display = "block";
});

btnRav.addEventListener('click', () => {
  datosFiltrados = filtro(datos, 'Ravenclaw'); // hace que los datos a mostrar sean solo los de la casa
  mostrarHTML();
  sectionOne.style.display = "none";
  iconoOrderAZ.style.display = "block";
});

btnSly.addEventListener('click', () => {
  datosFiltrados = filtro(datos, 'Slytherin'); // hace que los datos a mostrar sean solo los de la casa
  mostrarHTML();
  sectionOne.style.display = "none";
  iconoOrderAZ.style.display = "block";
});

function mostrarHTML() {
  divPorcentaje.style.display = "block";

  const { porcentajeMujeres, porcentajeHombres } = calcularPorcentaje(datosFiltrados);
  console.log(calcularPorcentaje(datosFiltrados));
  spanPorcentajeHombres.innerHTML = porcentajeHombres + "%";
  spanPorcentajeMujeres.innerHTML = porcentajeMujeres + "%";

  const contenido = document.getElementById('cards');
  contenido.innerHTML = '';//para que quede vacio antes de mostrar la funcion a realizar, si no se iba hasta abajo
  
  if (order === 'asc') {
    datosFiltrados = orderAZ(datosFiltrados);
  }
  else if (order === 'des') {
    datosFiltrados = orderZA(datosFiltrados);
  }

  datosFiltrados.forEach((personaje) => {
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
    hatIcon.src = "./images/tinified/castle.png";
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


import data from './data/pokemon/pokemon.js';
export { listarPokemon, pokemon, filtrados }

const headerViewOne = document.getElementsByClassName("divViewHeaderOne")[0];
const headerViewTwo = document.getElementsByClassName("divViewHeaderTwo")[0];
const bKanto = document.getElementById('bKanto');
const bJohto = document.getElementById('bJohto');
const divLista = document.getElementById('listaPokemon');
const botonOrdenarPor = document.getElementById('botonOrdenarPor');
const botonTipo = document.getElementById('botonTipo');
const botonDebilidades = document.getElementById('botonDebilidades');
const botonResistencia = document.getElementById('botonResistencia');

bKanto.addEventListener('click', function () { listarPokemon('kanto') });
bJohto.addEventListener('click', function () { listarPokemon('johto') });
botonOrdenarPor.addEventListener('change', () => {
  ordenarPor(botonOrdenarPor.value);
});
botonTipo.addEventListener('change', () => {
  porTipo(botonTipo.value);
});
botonDebilidades.addEventListener('change', () => {
  debilidades(botonDebilidades.value);
});
botonResistencia.addEventListener('change', () => {
  resistencia(botonResistencia.value);
});


headerViewTwo.style.display = 'none';
let filtrados;

function listarPokemon(region) {
  headerViewOne.style.display = 'none';
  headerViewTwo.style.display = 'block';

  divLista.innerHTML = "";
  // Trae todos los pokemon de la region que seleccione
  filtrados = data.pokemon.filter(p => p.generation.name === region);
  for (let index = 0; index < filtrados.length; index++) {
    //Trae cada pokemon de uno en uno = element
    const element = filtrados[index];
    divLista.innerHTML += pokemon(element.name, element.num, element.type, element.img)
  }
}
// Por cada pokemon añade el return 
let pokemon = (nombre, numero, tipo, imagen) => {
  return `<div class="contenedor">
    <div class="pokemon">
      <img src="${imagen}" class="imagen" />
      <div>
        <p>${nombre}</p>
        <p>#${numero}</p>
        <p>${tipo}</p>
      </div>
    </div>
  </div>`
}

function ordenarPor(seleccion) {
  if ("aZOrder" === seleccion) {
    filtrados.sort((a, b) => a.name.localeCompare(b.name));
  }
  else if ("zAOrder" === seleccion) {
    filtrados.sort((a, b) => b.name.localeCompare(a.name));
  }
  else if ("numAsc" === seleccion) {
    filtrados.sort((a, b) => a.num - b.num);
  }
  else if ("numDes" === seleccion) {
    filtrados.sort((a, b) => b.num - a.num);
  }
  // Limpia la lista de pokemom
  divLista.innerHTML = "";
  // Agrega nuevamente los pokemon a la lista 
  for (let index = 0; index < filtrados.length; index++) {
    //Trae cada pokemon de uno en uno = element
    const element = filtrados[index];
    divLista.innerHTML += pokemon(element.name, element.num, element.type, element.img)
  }
}

function porTipo(seleccion) {
  filtrados = filtrados.filter(p => p.type.includes(seleccion));
  divLista.innerHTML = "";
  // Agrega nuevamente los pokemon a la lista 
  for (let index = 0; index < filtrados.length; index++) {
    //Trae cada pokemon de uno en uno = element
    const element = filtrados[index];
    divLista.innerHTML += pokemon(element.name, element.num, element.type, element.img)
  }
}

function debilidades(seleccion) {
  filtrados = filtrados.filter(p => p.weaknesses.includes(seleccion));
  divLista.innerHTML = "";
  // Agrega nuevamente los pokemon a la lista 
  for (let index = 0; index < filtrados.length; index++) {
    //Trae cada pokemon de uno en uno = element
    const element = filtrados[index];
    divLista.innerHTML += pokemon(element.name, element.num, element.type, element.img)
  }
}

function resistencia(seleccion) {
  filtrados = filtrados.filter(p => p.resistant.includes(seleccion));
  divLista.innerHTML = "";
  // Agrega nuevamente los pokemon a la lista 
  for (let index = 0; index < filtrados.length; index++) {
    //Trae cada pokemon de uno en uno = element
    const element = filtrados[index];
    divLista.innerHTML += pokemon(element.name, element.num, element.type, element.img)
  }
}



console.log(data.pokemon.filter(p => p.generation.name === "johto"));

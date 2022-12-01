import { listarPokemon, ordenarPor, porTipo, debilidades, resistencia } from './data.js'

const headerViewOne = document.getElementsByClassName("divViewHeaderOne")[0];
const headerViewTwo = document.getElementsByClassName("divViewHeaderTwo")[0];
const bKanto = document.getElementById('bKanto');
const bJohto = document.getElementById('bJohto');
const divLista = document.getElementById('listaPokemon');
const botonOrdenarPor = document.getElementById('botonOrdenarPor');
const botonTipo = document.getElementById('botonTipo');
const botonDebilidades = document.getElementById('botonDebilidades');
const botonResistencia = document.getElementById('botonResistencia');

bKanto.addEventListener('click', () => {
  headerViewOne.style.display = 'none';
  headerViewTwo.style.display = 'block';
  filtrados = listarPokemon('kanto');
  pintarLista();
});
bJohto.addEventListener('click', () => {
  headerViewOne.style.display = 'none';
  headerViewTwo.style.display = 'block';
  filtrados = listarPokemon('johto');
  pintarLista();
});
botonOrdenarPor.addEventListener('change', () => {
  filtrados = ordenarPor(botonOrdenarPor.value, filtrados);
  pintarLista();
});
botonTipo.addEventListener('change', () => {
  filtrados = porTipo(botonTipo.value, filtrados);
  pintarLista();
});
botonDebilidades.addEventListener('change', () => {
  filtrados = debilidades(botonDebilidades.value, filtrados);
  pintarLista();
});
botonResistencia.addEventListener('change', () => {
  filtrados = resistencia(botonResistencia.value, filtrados);
  pintarLista();
});


headerViewTwo.style.display = 'none';
let filtrados;

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

let pintarLista = () => {
  // Limpia la lista de pokemoms
  divLista.innerHTML = "";
  // Agrega nuevamente los pokemon a la lista 
  for (let index = 0; index < filtrados.length; index++) {
    //Trae cada pokemon de uno en uno = element
    const element = filtrados[index];
    divLista.innerHTML += pokemon(element.name, element.num, element.type, element.img)
  }
}

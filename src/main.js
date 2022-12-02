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
const botonBorrarFiltros= document.getElementById('borrarFiltros');
const selectResistencia = document.getElementById('botonResistencia');
const selectOrdenarPor = document.getElementById('botonOrdenarPor');
const selectDebilidades = document.getElementById('botonDebilidades');
const selectTipo = document.getElementById('botonTipo');

bKanto.addEventListener('click', () => {
  headerViewOne.style.display = 'none';
  headerViewTwo.style.display = 'block';
  filtrados = listarPokemon('kanto');
  pintarLista();
  regiones="kanto"; 
});
bJohto.addEventListener('click', () => {
  headerViewOne.style.display = 'none';
  headerViewTwo.style.display = 'block';
  filtrados = listarPokemon('johto');
  pintarLista();
  regiones="johto";
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
botonBorrarFiltros.addEventListener('click',() => {
  headerViewOne.style.display = 'none';
  headerViewTwo.style.display = 'block';
  filtrados = listarPokemon(regiones);
  pintarLista();
  selectResistencia.value = 'defaultRes';
  selectOrdenarPor.value = 'defaultOption';
  selectDebilidades.value = 'defaultDeb';
  selectTipo.value = 'defaultTipe';

})


headerViewTwo.style.display = 'none';
let filtrados;
let regiones;

// Por cada pokemon añade el return 
let pokemon = (nombre, numero, tipo, imagen) => {
  return `<div class="contenedor" onclick>
    <div class="pokemon" class="frente" >
      <img src="${imagen}" class="imagen" />
      <div class="contenido">
        <h4>${nombre}</h4>
        <h4>#${numero}</h4>
        <h5>${tipo}</h5>
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

import data from './data/pokemon/pokemon.js';

const headerViewOne = document.getElementsByClassName("divViewHeaderOne")[0];
const headerViewTwo = document.getElementsByClassName("divViewHeaderTwo")[0];
headerViewTwo.style.display = 'none';

const bKanto = document.getElementById('bKanto');
const bJohto = document.getElementById('bJohto');
bKanto.addEventListener('click', function(){listarPokemon('kanto')});
bJohto.addEventListener('click', function(){listarPokemon('johto')});
const divLista = document.getElementById('listaPokemon');

function listarPokemon(region) {
    headerViewOne.style.display = 'none';
    headerViewTwo.style.display = 'block';

    divLista.innerHTML = "";
    data.pokemon.filter(p => p.generation.name===region).forEach(p => {
        divLista.innerHTML += pokemon(p.name, p.num, p.type, p.img);
    });

}

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

console.log(data.pokemon.filter(p => p.generation.name==="johto"));

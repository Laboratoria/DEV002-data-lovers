import data from "../data/pokemon/pokemon.js"
const pokemones = data.pokemon;
import { filterPokemonByNumber } from "../data.js";


export const visualizarPokemones = (arrayPokemones) => {    //esta función limpia al padre(listado-pokemones) y renderiza los componentes hijos(pokemon-item)  
  const listadoPokemones = document.getElementById('listado-pokemones')
  listadoPokemones.innerHTML = ''; //limpia el componente padre
  const htmlContainerPokemon = arrayPokemones.map(poke => {
    //incrustando la tarjeta pokemon--item con javaScript a html usando InnerHTML
    const pokemoncitoContainer = document.createElement("div")  //para crear un div
    pokemoncitoContainer.classList.add("pokemon-item")  //para crear una clase en el div
    pokemoncitoContainer.innerHTML = `
      <h3>el pokemon se llama ${poke.name} ${poke.num} </h3>
      <img  src="${poke.img}" >
   `;
    //pokemoncitoContainer.addEventListener(“click”, visualizarModalPokemones(poke.num))
    pokemoncitoContainer.addEventListener("click", () => visualizarModalPokemon(poke.num))
    return pokemoncitoContainer
  });
  // console.log(htmlContainerPokemones);
 /*listadoPokemones.innerHTML = htmlContainerPokemones variable que incrusta el listado de pokemones*/
 listadoPokemones.append(...htmlContainerPokemon) //inserta un set de 

}


const openModal = () => {
  modalAdd.style.display = 'flex';
}
export const closeModal = () => {
  modalAdd.style.display = 'none';
}

export function visualizarModalPokemon(numerito) { 
  const [pokemon] = filterPokemonByNumber(numerito, pokemones);
  //console.log(pokemon)
  openModal()
  const itemPokemon = document.getElementById('modalContainerPokemon');
  const modalPokemon = `
  <div class="informacion-pokemon" id="modal-pokemon">    
    <h3>el pokemon se llama ${pokemon.name} ${pokemon.num} </h3>
    <img  src="${pokemon.img}" >
    <h2>CARACTERÍSTICAS ESPECÍFICAS</h2>
    <h3>About: ${pokemon.about}</h3>
    <img class="imgAcerca" src="img/imgFiguritas/acerca.png" alt="foquito">

  </div>
 `;
  itemPokemon.innerHTML = modalPokemon;
}

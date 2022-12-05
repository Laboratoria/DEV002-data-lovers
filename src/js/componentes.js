import data from "../data/pokemon/pokemon.js"
const pokemones = data.pokemon;
import { filterPokemonByNumber } from "../data.js";

export const visualizarPokemones = (arrayPokemones) => {    //esta función limpia al padre(listado-pokemones) y renderiza los componentes hijos(pokemon-item)  
  const listadoPokemones = document.getElementById('listado-pokemones')
  listadoPokemones.innerHTML = ''; //limpia el componente padre
  let htmlContainerPokemones = '';
  arrayPokemones.forEach(poke => {
    //incrustando la tarjeta pokemon--item con javaScript a html usando InnerHTML
    const pokemoncito = `
       <div class="pokemon-item" id="pokemon-item">    
         <h3>el pokemon se llama ${poke.name} ${poke.num} </h3>
         <img  src="${poke.img}" >
       </div>
      `;
      const tarjetaPokemon = document.getElementById('pokemon-item' )
      tarjetaPokemon.addEventListener("click", visualizarModalPokemones(poke.num))
    // console.log(pokemoncito)
    htmlContainerPokemones = htmlContainerPokemones + pokemoncito
  });
  // console.log(htmlContainerPokemones);
  listadoPokemones.innerHTML = htmlContainerPokemones  //variable que incrusta el listado de pokemones
}


const openModal = () => {
  modalAdd.style.display = 'flex';

}
export const closeModal = () => {
  modalAdd.style.display = 'none';
}

function visualizarModalPokemon(number) { //uso window cuando quiero generar una función en el DOM 
  const [pokemon] = filterPokemonByNumber(number, pokemones);
  console.log(pokemon)
  openModal()
  const itemPokemon = document.getElementById('modalContainerPokemon');
  const modalPokemon = `
  <div class="informacion-pokemon" id="modal-pokemon">    
    <h3>el pokemon se llama ${pokemon.name} ${pokemon.num} </h3>
    <img  src="${pokemon.img}" >
    <h2>CARACTERÍSTICAS ESPECÍFICAS</h2>
    <h3>About: ${pokemon.about}</h3>
    <img class="imgAcerca" src="img/imgFiguritas/acerca.jpeg" alt="foquito">


  </div>
 `;
  itemPokemon.innerHTML = modalPokemon;
}

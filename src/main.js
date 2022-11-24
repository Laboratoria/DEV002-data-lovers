
import data from './data/pokemon/pokemon.js';
import {  } from './data.js';
import pokemon from './data/pokemon/pokemon.js';


  
 document.getElementById("btnPokemones").addEventListener("click", () => {
    document.querySelector('.paginaPrincipal').style.display= 'none';
    document.querySelector('.paginaEstadistica').style.display= 'none';
    document.querySelector('.paginaPokemones').style.display= 'block';
    document.querySelector('.filtrosBusqueda').style.display= 'block';

});

document.getElementById("btnEstadistica").addEventListener("click", () => {
    document.querySelector('.paginaPrincipal').style.display= 'none';
    document.querySelector('.paginaEstadistica').style.display= 'block';
    document.querySelector('.paginaPokemones').style.display= 'none';
    document.querySelector('.filtrosBusqueda').style.display= 'none'
});

//console.log(example, data);

//Tarjetas de pokemones
const seccion = document.getElementById('seccionPokemones');
const contenedor = document.getElementById('tarjetaPokemones');

const mostrar = (pokemones)=>{
    pokemones.forEach(pokemon => {

        
        seccion.appendChild(contenedor);
        seccion.setAttribute('class', 'paginaPokemones');
        contenedor.innerHTML+=  `<div>
                                    <img src='${pokemon.img}' class='imgPokemon'>
                                   </div>`
        document.getElementById('nombrePokemon').innerHTML+=`<h2 class='nombreP'> ${pokemon.name} </h2>`

    });
} 
 mostrar(pokemon.pokemon);



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
const contenedor = document.createElement('div');
contenedor.setAttribute('class','contenedorTarjetas'); 

const mostrar = (pokemones)=>{
    pokemones.forEach(pokemon => {

        
        seccion.appendChild(contenedor);
        seccion.setAttribute('class', 'paginaPokemones');
       contenedor.innerHTML+=  
       
       ` <div class="tarjetaPokemones" id="tarjetaPokemones" >
                                 <div class="encabezadoTarjeta">
                                   <h2 id="nombrePokemon" class="nombreP">${pokemon.name} </h2>
                                   <img src="${pokemon.img}" alt="" id="imagenPokemon" class="imgPokemon">
                                   <h3 id="tipoPokemon" class="textoh3"> Type: </h3>
                                   <h3 id="generacionPokemon" class="textoh3"> Generation:</h3>          
                                 </div>
                                 
                                 <div class="descripcionTarjeta">
                                   <p id="aboutPokemon" class="aboutP">Descripcion</p>
                                 
                                 </div>
                                 
                                 <div class="botonesTarjeta">
                                   <button id="btnStats" class="bntS"> Stats </button>
                                   <button id="btnResistencia" class="btnR">Characteristics</button>
                                 </div>
                                                      
                                 </div>  `                        
     

    });
} 
 mostrar(pokemon.pokemon);


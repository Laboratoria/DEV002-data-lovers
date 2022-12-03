
import data from './data/pokemon/pokemon.js';
import {  } from './data.js';
import pokemon from './data/pokemon/pokemon.js';
import { filtrarTipo } from './data.js';



// Funciones para visualizar las secciones del html: 
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


 const seccion = document.getElementById('seccionPokemones');
 seccion.setAttribute('class', 'paginaPokemones');
 const contenedorPadre= document.createElement('div');
 contenedorPadre.setAttribute('class','contenedorP');
 const contenedor = document.createElement('div');
contenedor.setAttribute('class','contenedorTarjetas'); 
const filtros = document.createElement('div');
filtros.setAttribute('class','contenedorFiltros'); 
contenedorPadre.appendChild(contenedor);     
contenedorPadre.appendChild(filtros);
seccion.appendChild(contenedorPadre);

// const tipoEmoticon= {

//   grass:'😉',
//   water:'💖',
//   poison:'🦢',

// };


const mostrar = (pokemones)=>{
    pokemones.forEach(pokemon => {
        
 
           
       contenedor.innerHTML+=  
       
       ` <div class="tarjetaPokemones" id="tarjetaPokemones" >
                                <h2 id="nombrePokemon" class="nombreP">${pokemon.name} </h2>
                                <h3 id="numeroPokemon" class="textoh3">${pokemon.num} </h3>
                                 <div class="encabezadoTarjeta">                     
                                  <img src="${pokemon.img}" alt="" id="imagenPokemon" class="imgPokemon">
                                  <div class = 'contenedorh3'> <h3 id="tipoPokemon" class="textoh3">Type: ${pokemon.type} </h3>
                                 <h3 id="generacionPokemon" class="textoh3"> Generation:${pokemon.generation.name} </h3>
                                 </div>      
                            </div>
                            
                                 <div class="descripcionTarjeta">
                                   <p id="heightPokemon" class="sizeP"> height: ${pokemon.size.height}</p>
                                   <p id="weightPokemon" class="sizeP"> weight: ${pokemon.size.weight}</p>
                                 
                                 </div>

                                 <div id="contenedorResydebi" class="cajaResydebi">
            
                                 <ul class="contenedorListas"  >
                                   <li class="listaResistencia ">
                                    <h2 class='tituloLista'>Resistant<h2>
                                     <div id="contenedorResistencia">
                                        <p class='debiyresis'>${pokemon.resistant  } </p>
                                    
                                                                                 
                                       </div>
                                   </li>
                                                                      
                                    <li class="listaDebilidades" >
                                    <h2  class='tituloLista'>Weaknesses</h2>
                                    <div id="contenedorDebilidades">
                                        <p class='debiyresis'>  ${pokemon.weaknesses}</p>
                                      </div>
                                    </li> 
                         
                                   
                                   
                                 </ul>
                               
                         
                                    </div>
                                 
                                 

                                                      
                             </div>  `                        
     
    
    
      
  
  });
} 


mostrar(pokemon.pokemon);



// Ocultar y mostrar resistencias y debilidades pokemones:


 
// Mostrar pokemones Filtrados:
const todoslosPokemones= pokemon.pokemon;

const botonFiltrar = document.getElementById('btn-filtrar');

botonFiltrar.addEventListener('click',()=>{

  document.getElementById("tipoPokemones").addEventListener("change", () => {
    let seleccionTipoPokemon =document.getElementById('tipoPokemones').value;
    if (seleccionTipoPokemon == "") {
      mostrar(pokemon.pokemon);
    } 
    else {
      contenedor.innerHTML=''; 
      const dataTipoPokemon = filtrarTipo(todoslosPokemones, seleccionTipoPokemon);     
      mostrar(dataTipoPokemon);
     
      
    }
  
  });
  

});


 







//  let tipoPokemon= getSelection('')
// document.getElementById("tipoPokemon").value=
// const filtrarTipo = (pokemonestipo) => {
//   Object.entries(pokemon.pokemon).forEach( valor=> valor.forEach(dentro =>{
//     let datosPokemones= dentro;
//     const filtroTipos= datosPokemones.filter= (pokemones=> type['']=water)
    
//     console.log(filtroTipos)
//   }
//   ));
 
//   const tipoPokemones= datosPokemones.filter(tipo=>{
//   return tipo.type === type['grass'];
  
// });
// console.log(tipoPokemones)


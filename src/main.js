import pokemon from './data/pokemon/pokemon.js';
import { filtrarTipo,  ordenarData, buscarPorNombre, obtenerTopDiezHuida} from './data.js';

// Funciones para visualizar las secciones del html: 
 document.getElementById("btnPokemones").addEventListener("click", () => {
    document.querySelector('.paginaPrincipal').style.display= 'none';
    document.querySelector('.paginaEstadistica').style.display= 'none';
    document.querySelector('.paginaPokemones').style.display= 'block';
    document.querySelector('.tiposInput').style.display= 'block';
   // document.querySelector('.filtrosBusqueda').style.display= 'block'; 
});

document.getElementById("btnEstadistica").addEventListener("click", () => {
    document.querySelector('.paginaPrincipal').style.display= 'none';
    document.querySelector('.paginaEstadistica').style.display= 'block';
    document.querySelector('.paginaPokemones').style.display= 'none';
    document.querySelector('.tiposInput').style.display= 'none';
   // document.querySelector('.filtrosBusqueda').style.display= 'none';
});

// funcion para mostrar opciones de filtros:

// document.getElementById('clickmostrarFiltros').addEventListener('click',()=>{
//   document.querySelector('.container-Filtros').style.display='block'

// })

const todoslosPokemones = pokemon.pokemon;
const inputBuscarNombre = document.getElementById('inputBuscarNombre');
const botonFiltrar = document.getElementById('btn-filtrar');
const ordenPokemonAz = document.getElementById('buttonAZ');
const ordenPokemonZa = document.getElementById('buttonZA');
const estadisticas = document.getElementById('btnEstadistica');


const seccion = document.getElementById('seccionPokemones');
seccion.setAttribute('class', 'paginaPokemones');

// const contenedorPadre = document.createElement('div');
// contenedorPadre.setAttribute('class', 'contenedorP');

const contenedor = document.createElement('div');
contenedor.setAttribute('class', 'contenedorTarjetas');


document.getElementById('contenedor3TJ').appendChild(contenedor);
//contenedorPadre.appendChild(contenedor);
//contenedorPadre.appendChild(filtros);
//seccion.appendChild(contenedorPadre);

//  const tipoEmoticon= {
//   bug: '🦗',
//   dark: '⚫',
//   dragon: '🐉',
//   electric: '⚡',
//   fighting: '🤼',
//   flying: '🌪️',
//   ghost: '👻', 
//   grass: '🌱', 
//   ground: '🐍',
//   ice: '❄️',
//   normal: '⚪',
//   poison: '🧴',
//   psychic: '🌫️',
//   rock: '🥌',
//   steel: '⚙️',
//   water: '💦',

//  };

const mostrar = (pokemones) => {

  pokemones.forEach((pokemon) => {

     
    const obteniendoResistencias= (resis)=>{
      let r = '';
      resis.forEach( (res) =>{
              r+= ` <p class='debiyresis'>${res}</p> `;  
          
            } );
        return r
    }  

    const obteniendoDebilidades= (debi)=>{
      let d = '';
      debi.forEach( (debilidades) =>{
              d+= ` <p class='debiyresis'>${debilidades}</p> `;  
                    } );
              return d
    }  
 
    contenedor.innerHTML +=  
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
              <ul class="contenedorListas">
                <li class="listaResistencia">
                <h2 class='tituloLista'>Resistant<h2>
                  <div id="contenedorResistencia" class='contenedorRyD'>
                    <p class='debiyresis'>${obteniendoResistencias(pokemon.resistant)}</p>                                 
                    </div>
                </li>           
                <li class="listaDebilidades" >
                <h2  class='tituloLista'>Weaknesses</h2>
                <div id="contenedorDebilidades" class='contenedorRyD'>
                    <p class='debiyresis'>  ${obteniendoDebilidades(pokemon.weaknesses)}</p>
                  </div>
                </li> 
              </ul>
            </div>
          </div>  `
    });
} 


mostrar(todoslosPokemones);

//botonFiltrar.addEventListener('click', () => {
  document.getElementById("tipoPokemones").addEventListener("change", () => {
    let seleccionTipoPokemon = document.getElementById('tipoPokemones').value;
    if (seleccionTipoPokemon == "") {
      mostrar(pokemon.pokemon);
    }
    else {
      contenedor.innerHTML = '';
      const dataTipoPokemon = filtrarTipo(todoslosPokemones, seleccionTipoPokemon);
      mostrar(dataTipoPokemon);
    }
  });
//});

ordenPokemonAz.addEventListener("click", () => {
 contenedor.innerHTML = '';
 mostrar(ordenarData(todoslosPokemones, 'name', 'asc'));
});

ordenPokemonZa.addEventListener("click", () => {
  contenedor.innerHTML = '';
  mostrar(ordenarData(todoslosPokemones, 'name', 'desc'));
});

inputBuscarNombre.addEventListener("input",() => {
  contenedor.innerHTML = '';
  mostrar(buscarPorNombre(todoslosPokemones , inputBuscarNombre.value));
});

// Obtener TOP 10
estadisticas.addEventListener("click", () => {
  contenedor.innerHTML = '';
  mostrar(obtenerTopDiezHuida(todoslosPokemones));
}
);


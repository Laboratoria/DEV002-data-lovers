import pokemon from './data/pokemon/pokemon.js';
import { filtrarTipo, filtrarResistencia, filtrarDebilidades, /*obtenerTopDiezHuida,*/  ordenarData, buscarPorNombre} from './data.js';

// Funciones para visualizar las secciones del html: 

// document.querySelector('.paginaPrincipal').style.display = 'block';
// document.querySelector('.paginaEstadistica').style.display = 'block';
// document.querySelector('.paginaPokemones').style.display = 'block';
// document.querySelector('.tiposInput').style.display = 'block'; 




const dataPokemon = pokemon.pokemon;
const inputBuscarNombre = document.getElementById('inputBuscarNombre');
const menuTipo = document.getElementById('tipoPokemones');
const menuResistencias= document.getElementById('resistenciaPokemon');
const menuDebilidades = document.getElementById('debilidadPokemon');
const ordenPokemonAz = document.getElementById('buttonAZ');
const ordenPokemonZa = document.getElementById('buttonZA');

const seccion = document.getElementById('seccionPokemones');
seccion.setAttribute('class', 'paginaPokemones');


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

// Esta es la función que se encarga de cargar todos los pokemones con sus tarjetas
const mostrar = (pokemones) => {
  pokemones.forEach((pokemon) => {

    const obteniendoResistencias = (resis) => {
      let r = '';
      resis.forEach((res) => {
        r += ` <p class='debiyresis'>${res}</p> `;
      });
      return r
    }

    const obteniendoDebilidades = (debi) => {
      let d = '';
      debi.forEach((debilidades) => {
        d += ` <p class='debiyresis'>${debilidades}</p> `;
      });
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

mostrar(dataPokemon);

// Esta es la función para el menú de filtro por tipo de pokemones
menuTipo.addEventListener("change", () => {
  contenedor.innerHTML = '';
  if (document.getElementById('tipoPokemones').value == "empty") {
    mostrar(dataPokemon);
  }
  else {
    mostrar(filtrarTipo(dataPokemon, document.getElementById('tipoPokemones').value));
  }
})

// Esta es la función para el menú de filtro por resistencias de pokemones
menuResistencias.addEventListener("change", () => {
  contenedor.innerHTML = '';
 if (document.getElementById('resistenciaPokemon').value == "empty") {
    mostrar(dataPokemon);
  }
  else {
    mostrar(filtrarResistencia(dataPokemon, document.getElementById('resistenciaPokemon').value));
  }
})

// Esta es la función para el menú de filtro por debilidades de pokemones
menuDebilidades.addEventListener("change", () => {
  contenedor.innerHTML = '';
 if (document.getElementById('debilidadPokemon').value == "empty") {
    mostrar(dataPokemon);
  }
  else {
    mostrar(filtrarDebilidades(dataPokemon, document.getElementById('debilidadPokemon').value));
  }
})

// Esta es la función del botón ORDEN AZ
ordenPokemonAz.addEventListener("click", () => {
  contenedor.innerHTML = '';
  mostrar(ordenarData(dataPokemon, 'name', 'asc'));
});

// Esta es la función del botón ORDEN ZA
ordenPokemonZa.addEventListener("click", () => {
  contenedor.innerHTML = '';
  mostrar(ordenarData(dataPokemon, 'name', 'desc'));
});

// Esta es la función del Input para la búsqueda por nombre
inputBuscarNombre.addEventListener("input", () => {
  contenedor.innerHTML = '';
  mostrar(buscarPorNombre(dataPokemon, inputBuscarNombre.value));
});

// Esta es la función para mostrar el TOP 10
/*estadisticas.addEventListener("click", () => {
  contenedor.innerHTML = '';
  contenedor.style.display = "flex";
  mostrar(obtenerTopDiezHuida(dataPokemon.encounter["base-flee-rate"]));
}
);*/


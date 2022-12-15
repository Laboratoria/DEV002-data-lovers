import pokemon from './data/pokemon/pokemon.js';
import { filtrarTipo, filtrarResistencia, filtrarDebilidades, obtenerTopDiezHuida, ordenarData, buscarPorNombre} from './data.js';

const dataPokemon = pokemon.pokemon;
const menuPaginaInicio = document.getElementById('opcionPaginaInicio');
const menuBusquedaPokemon = document.getElementById('opcionBusquedaPokemon');
const menuFiltroPokemon = document.getElementById('opcionFiltroPokemon');
const menuOrdenarPokemon = document.getElementById('opcionOrdenarPokemon');
const menuTopDiez = document.getElementById('opcionTopDiez');
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

const botonHambur = document.querySelector('.btn-hambur');
const nav= document.querySelector('.navOpciones');

botonHambur.addEventListener('click',()=>  {
  
    nav.classList.toggle('activo')

})

document.getElementById('contenedor3TJ').appendChild(contenedor);

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
                <h2 class='tituloResistencia'>Resistant<h2>
                  <div id="contenedorResistencia" class='contenedorRyD'>
                    <p class='debiyresis'>${obteniendoResistencias(pokemon.resistant)}</p>                                 
                    </div>
                </li>           
                <li class="listaDebilidades" >
                <h2  class='tituloDebilidades'>Weaknesses
               
                </h2>
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

// Esta es la función para mostrar unicamente el input para realizar búsqueda
menuBusquedaPokemon.addEventListener("click", () => {
  document.getElementById("inputBuscarNombre").style.display = "block";
  document.getElementById("ordenarDatos").style.display = "none";
  document.getElementById("filtros").style.display = "none";
})

// Esta es la función para mostrar unicamente los botones para poder ordenar AZ o ZA segun corresponda
menuOrdenarPokemon.addEventListener("click", () => {
  document.getElementById("inputBuscarNombre").style.display = "none";
  document.getElementById("ordenarDatos").style.display = "block";
  document.getElementById("filtros").style.display = "none";
})

// Esta es la función para mostrar unicamente los filtros de los pokemones
menuFiltroPokemon.addEventListener("click", () => {
  document.getElementById("inputBuscarNombre").style.display = "none";
  document.getElementById("ordenarDatos").style.display = "none";
  document.getElementById("filtros").style.display = "block";
})

// Esta es la función para cargar nuevamente la página
menuPaginaInicio.addEventListener("click", () => {
  location.reload();
})

// Esta es la función para mostrar el TOP 10
menuTopDiez.addEventListener("click", () => {
  contenedor.innerHTML = '';
    mostrar(obtenerTopDiezHuida(dataPokemon));
}
);

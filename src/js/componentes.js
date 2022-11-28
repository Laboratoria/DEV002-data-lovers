
export const visualizarPokemones = (arrayPokemones) => {    //esta función limpia al padre(listado-pokemones) y renderiza los componentes hijos(pokemon-item)  
    const listadoPokemones = document.getElementById('listado-pokemones')
    listadoPokemones.innerHTML = ''; //limpia el componente padre
    let htmlContainerPokemones = '';
    arrayPokemones.forEach(poke => {
      //incrustando la tarjeta pokemon--item con javaScript a html usando InnerHTML
      const pokemoncito = `
       <div class="pokemon-item">    
         <h3>el pokemon se llama ${poke.name} ${poke.num} </h3>
         <img  src="${poke.img}" >
       </div>
      `;
      // console.log(pokemoncito)
      htmlContainerPokemones = htmlContainerPokemones + pokemoncito
    });
    // console.log(htmlContainerPokemones);
    listadoPokemones.innerHTML = htmlContainerPokemones  //variable que incrusta el listado de pokemones
  }
  
  
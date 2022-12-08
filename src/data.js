// estas funciones son de ejemplo
export const filtrarTipo = (todoslosPokemones,seleccionTipoPokemon ) => {
  return todoslosPokemones.filter(pokemonTipo=>pokemonTipo.type[0] === seleccionTipoPokemon)  
}


// Esta función se encarga de buscar por nombre de pokemon
export const buscarPorNombre = (pokemones, nombrePokemon) => {
  return pokemones.filter((pokemon) => {
    return pokemon.name.toLowerCase().indexOf(nombrePokemon.toLowerCase()) > -1;
  });
}

export const ordenarData = (todoslosPokemones, key, orden) => { 
  
  return todoslosPokemones.sort(function (a, b) {
    var x = a[key],
    y = b[key];

    if (orden === 'asc') {
        return ((x < y) ? -1 : ((x > y) ? 1 : 0));
    }

    if (orden === 'desc') {
        return ((x > y) ? -1 : ((x < y) ? 1 : 0));
    }
});
};




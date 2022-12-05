// estas funciones son de ejemplo
export const filtrarTipo = (todoslosPokemones,seleccionTipoPokemon ) => {
  return todoslosPokemones.filter(pokemonTipo=>pokemonTipo.type[0] === seleccionTipoPokemon)  
};

export const buquedaPorNombre = (todoslosPokemones, nombrePokemon) => {
  console.log(nombrePokemon);
  console.log(todoslosPokemones);
};

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

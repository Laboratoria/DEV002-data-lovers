// estas funciones son de ejemplo
export const filtrarTipo = (todoslosPokemones, seleccionTipoPokemon) => {
  return todoslosPokemones.filter(pokemonTipo => pokemonTipo.type[0] === seleccionTipoPokemon)
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

export const obtenerTopDiezHuida = (todoslosPokemones) => {

  return todoslosPokemones.sort(function (a, b) {
    if (a.encounter["base-flee-rate"] == 'not in capture') {
      a.encounter["base-flee-rate"] = 0;
    } else {
      if (a.encounter["base-flee-rate"] < b.encounter["base-flee-rate"]) {
        return 1;
      }
      if (a.encounter["base-flee-rate"] > b.encounter["base-flee-rate"]) {
        return -1;
      }
      return 0;
    }


  }).slice(0, 10);
};

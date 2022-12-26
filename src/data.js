// Esta función realiza el filtro por tipo de POKEMON
export const filtrarTipo = (todoslosPokemones, seleccion) => {
  return todoslosPokemones.filter(pokemon =>  pokemon.type[0] === seleccion)
}

// Esta función realiza el filtro por Resistencia de POKEMON
export const filtrarResistencia= (todoslosPokemones, seleccion) => {
  return todoslosPokemones.filter(pokemon =>  pokemon.resistant[0] === seleccion)
}

// Esta función realiza el filtro por Debilidades de POKEMON
export const filtrarDebilidades = (todoslosPokemones, seleccion) => {
  return todoslosPokemones.filter(pokemon =>  pokemon.weaknesses[0] === seleccion)
}


// Esta función se encarga de buscar por nombre de POKEMON
export const buscarPorNombre = (pokemones, nombrePokemon) => {
  return pokemones.filter((pokemon) => {
    return pokemon.name.toLowerCase().indexOf(nombrePokemon.toLowerCase()) > -1;
  });
}

// Esta función se encarga de ORDENAR de manera ascendente y descendente la Data del POKEMONES
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

// // Esta función se encarga de mostrar el TOP 10 por HUIDA
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
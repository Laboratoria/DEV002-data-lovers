// estas funciones son de ejemplo

export const filterType = (data, selectedType) => {
  const filteredData = data.filter(pokemon => pokemon.type.includes(selectedType))
  return filteredData
}

export const filterGen = (data, gen) => {
  const filteredData = data.filter((pokemon) => {
    if (gen === 'gen-1') {
      return pokemon.num <= 151;
    } else if (gen === "gen-2") {
      return pokemon.num > 151;
    } else {
      return data
    }
  });
  return filteredData
};

export const sort = (data, sortBy, sortOrder) => {
  let sortData
  if (sortOrder === 'A-Z') {
    sortData = data.sort((pokemonA, pokemonB) => {
      if (pokemonA[sortBy] < pokemonB[sortBy]) {
        return -1;
      }
      else if (pokemonA[sortBy] > pokemonB[sortBy]) {
        return 1;
      } else {
        return 0;
      }
    })
    return sortData
  } else if (sortOrder === 'Z-A') {
    sortData = data.sort((pokemonA, pokemonB) => {
      if (pokemonA[sortBy] < pokemonB[sortBy]) {
        return 1;
      }
      else if (pokemonA[sortBy] > pokemonB[sortBy]) {
        return -1;
      } else {
        return 0;
      }
    })
    return sortData
  } else {
    return data
  }
}
export const computeStats = (data, type, total) => {
  const pokemon = data.filter(pokemon => pokemon.type.includes(type));
  const numberOfPokemon = pokemon.length;
  const percent = (numberOfPokemon / total ) * 100;
  return [numberOfPokemon, percent.toFixed(2)]
}
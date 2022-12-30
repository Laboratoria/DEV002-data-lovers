// estas funciones son de ejemplo

export const  filterType = (data, selectedType) => {
  const filteredData = data.filter(pokemon => pokemon.type.includes(selectedType))
  return filteredData
}

export const filterGen = (data, gen) => {
  const filteredData = data.filter((pokemon) => {
    if (gen === 'gen-1') {
      return pokemon.num <= 151;
    }
    else if (gen === "gen-2") {
      return pokemon.num > 151;
    } else {
      return data
    }
  });
  return filteredData
};


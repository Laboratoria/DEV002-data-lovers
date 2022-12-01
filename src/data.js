// estas funciones son de ejemplo
import data from './data/pokemon/pokemon.js';

export function listarPokemon(region) {
  return data.pokemon.filter(p => p.generation.name === region);
}

export function ordenarPor(seleccion, filtrados) {
  if ("aZOrder" === seleccion) {
    return filtrados.sort((a, b) => a.name.localeCompare(b.name));
  }
  else if ("zAOrder" === seleccion) {
    return filtrados.sort((a, b) => b.name.localeCompare(a.name));
  }
  else if ("numAsc" === seleccion) {
    return filtrados.sort((a, b) => a.num - b.num);
  }
  else if ("numDes" === seleccion) {
    return filtrados.sort((a, b) => b.num - a.num);
  }
}

export function porTipo(seleccion, filtrados) {
  return filtrados.filter(p => p.type.includes(seleccion));
}

export function debilidades(seleccion, filtrados) {
  return filtrados.filter(p => p.weaknesses.includes(seleccion));
}

export function resistencia(seleccion, filtrados) {
  return filtrados.filter(p => p.resistant.includes(seleccion));
}
  




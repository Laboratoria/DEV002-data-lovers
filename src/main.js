import data from './data/pokemon/pokemon.js';

const headerViewTwo = document.getElementsByClassName("divViewHeaderOne")[0];
headerViewTwo.style.display = 'none';

console.log(data.pokemon.filter(p => p.generation.name==="johto"));

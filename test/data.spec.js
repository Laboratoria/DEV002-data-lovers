import { filterGen, filterType, } from '../src/data.js';

const pokemonInput = [
  { name: 'Bulbasaur', type: ['grass', 'poison'], num: 1 },
  { name: 'pikachu', type: ['electric'], num: 25 },
  { name: 'psyduck', type: ['water'], num: 54 },
  { name: 'charmander', type: ['fire'], num: 4 },
  { name: 'charmeleon', type: ['fire'], num: 5 },
  { name: 'togepi', type: ['fairy'], num: 175 },
  { name: 'chinchou', type: ['water', 'electric'], num: 170 },
  { name: 'charizard', type: ['fire', 'flying'], num: 6 },
]

const fireOutput = [
  { name: 'charmander', type: ['fire'], num: 4},
  { name: 'charmeleon', type: ['fire'], num: 5},
  { name: 'charizard', type: ['fire', 'flying'], num: 6},
]
const genOneOutput = [
  { name: 'Bulbasaur', type: ['grass', 'poison'], num: 1},
  { name: 'pikachu', type: ['electric'], num: 25},
  { name: 'psyduck', type: ['water'], num: 54},
  { name: 'charmander', type: ['fire'], num: 4},
  { name: 'charmeleon', type: ['fire'], num: 5},
  { name: 'charizard', type: ['fire', 'flying'], num: 6},
]  

const genTwoOutput = [
  { name: 'togepi', type: ['fairy'], num: 175 },
  { name: 'chinchou', type: ['water', 'electric'], num: 170},
]
describe('prueba para la funcion filterType ', () => {
  it('debe ser una función', () => {
    expect(typeof filterType).toBe('function');
  });

  it('debe retornar un arreglo solo con tipo fuego', () => {
    expect(filterType(pokemonInput, 'fire')).toStrictEqual(fireOutput);
  });
});

describe('prueba para la funcion filterGen', () => {
  it('debe ser una funcion', () => {
    expect( typeof filterGen).toBe('function');
  });

  it('debe retornar un arreglo solo con gen I', () => {
    expect(filterGen(pokemonInput, "gen-1" )).toStrictEqual(genOneOutput);
  });

  it('debe retornar un arreglo solo con gen II', () => {
    expect(filterGen(pokemonInput, "gen-2")).toStrictEqual(genTwoOutput);
  });
  it('debe retornar un arreglo igual a entrada ', () => {
    expect(filterGen(pokemonInput, 'test')).toStrictEqual(pokemonInput);
  });

});

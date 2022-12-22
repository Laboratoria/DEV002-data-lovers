import { filterGen, filterType, } from '../src/data.js';

const pokemonInput = [
  { name: 'Bulbasaur', type: ['grass', 'poison'], num:001},
  { name: 'pikachu', type: ['electric'], num: 025 },
  { name: 'psyduck', type: ['water'], num: 054 },
  { name: 'charmander', type: ['fire'], num: 004 },
  { name: 'charmeleon', type: ['fire'], num: 005 },
  { name: 'togepi', type: ['fairy'], num: 175 },
  { name: 'chinchou', type: ['water', 'electric'], num: 170 },
  { name: 'charizard', type: ['fire', 'flying'], num: 006 },
]

const fireOutput = [
  { name: 'charmander', type: ['fire'], num: 004},
  { name: 'charmeleon', type: ['fire'], num: 005},
  { name: 'charizard', type: ['fire', 'flying'], num: 006},
]
const genOneOutPut = [
  { name: 'Bulbasaur', type: ['grass', 'poison'], num: 001},
  { name: 'pikachu', type: ['electric'], num: 025},
  { name: 'psyduck', type: ['water'], num: 054},
  { name: 'charmander', type: ['fire'], num: 004},
  { name: 'charmeleon', type: ['fire'], num: 005},
  { name: 'charizard', type: ['fire', 'flying'], num: 006},
]  

const genTwoOutput = [
  { name: 'togepi', type: ['fairy'], num: 175 },
  { name: 'chinchou', type: ['water', 'electric'], num: 170},
]
describe('prueba para la funcion filterType ', () => {
  it('debe ser una función', () => {
    expect(typeof filterType).toStrictEqual('function');
  });

  it('debe retornar un arreglo solo con tipo fuego', () => {
    expect(filterType(pokemonInput, 'fire')).toStrictEqual(fireOutput);
  });
});

describe('prueba para la funcion filterGen', () => {
  it('debe ser una funcion', () => {
    expect(filterGen).toStrictEqual('function');
  });

  it('debe retornar un arreglo solo con gen', () => {
    expect(filterGen(genOneOutPut)).toStrictEqual('genOneOutput');
  });

  it('debe retornar un arreglo solo con gen', () => {
    expect(filterGen(genTwoOutput)).toStrictEqual('genTwoOutput');
  });
  it('debe retornar un arreglo  con tipo volador ', () => {
    expect(filterType(pokemonInput, 'flying','poison')).toStrictEqual('pokemonInput');
  });

});

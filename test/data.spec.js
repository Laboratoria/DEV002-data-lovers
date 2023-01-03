import { filterGen, filterType, sort, computeStats} from '../src/data.js';

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
  { name: 'charmander', type: ['fire'], num: 4 },
  { name: 'charmeleon', type: ['fire'], num: 5 },
  { name: 'charizard', type: ['fire', 'flying'], num: 6 },
]
const genOneOutput = [
  { name: 'Bulbasaur', type: ['grass', 'poison'], num: 1 },
  { name: 'pikachu', type: ['electric'], num: 25 },
  { name: 'psyduck', type: ['water'], num: 54 },
  { name: 'charmander', type: ['fire'], num: 4 },
  { name: 'charmeleon', type: ['fire'], num: 5 },
  { name: 'charizard', type: ['fire', 'flying'], num: 6 },
]

const genTwoOutput = [
  { name: 'togepi', type: ['fairy'], num: 175 },
  { name: 'chinchou', type: ['water', 'electric'], num: 170 },
]

const azOutput = [
  { name: 'Bulbasaur', type: ['grass', 'poison'], num: 1 },
  { name: 'charizard', type: ['fire', 'flying'], num: 6 },
  { name: 'charmander', type: ['fire'], num: 4 },
  { name: 'charmeleon', type: ['fire'], num: 5 },
  { name: 'chinchou', type: ['water', 'electric'], num: 170 },
  { name: 'pikachu', type: ['electric'], num: 25 },
  { name: 'psyduck', type: ['water'], num: 54 },
  { name: 'togepi', type: ['fairy'], num: 175 },
]

const zaOutput = [
  { name: 'togepi', type: ['fairy'], num: 175 },
  { name: 'psyduck', type: ['water'], num: 54 },
  { name: 'pikachu', type: ['electric'], num: 25 },
  { name: 'chinchou', type: ['water', 'electric'], num: 170 },
  { name: 'charmeleon', type: ['fire'], num: 5 },
  { name: 'charmander', type: ['fire'], num: 4 },
  { name: 'charizard', type: ['fire', 'flying'], num: 6 },
  { name: 'Bulbasaur', type: ['grass', 'poison'], num: 1 },

]

const statsOutput = [3, '37.50']

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
    expect(typeof filterGen).toBe('function');
  });

  it('debe retornar un arreglo solo con gen I', () => {
    expect(filterGen(pokemonInput, "gen-1")).toStrictEqual(genOneOutput);
  });

  it('debe retornar un arreglo solo con gen II', () => {
    expect(filterGen(pokemonInput, "gen-2")).toStrictEqual(genTwoOutput);
  });
  it('debe retornar un arreglo igual a entrada ', () => {
    expect(filterGen(pokemonInput, 'test')).toStrictEqual(pokemonInput);
  });

});

describe('prueba para la funcion sort', () => {
  it('debe ser una funcion', () => {
    expect(typeof sort).toBe('function');
  });

  it('debe retornar un arreglo con la data ordenada de forma a-z', () => {
    expect(sort(pokemonInput, 'name', 'A-Z')).toStrictEqual(azOutput);
  });

  it('debe retornar un arreglo con data ordenada de forma z-a', () => {
    expect(sort(pokemonInput, 'name', 'Z-A')).toStrictEqual(zaOutput);
  });

  it('debe retornar un arreglo igual a la entrada', () => {
    expect(sort(pokemonInput, 'name', 'test')).toStrictEqual(pokemonInput);
  });

});

describe('prueba para la funcion computeStats ', () => {
  it('debe ser una función', () => {
    expect(typeof computeStats ).toBe('function');
  });

  it('debe retornar un arreglo que contenga la cantidad y el porcentaje de tipo fuego', () => {
    expect(computeStats(pokemonInput, 'fire', 8)).toStrictEqual(statsOutput);
  });
});

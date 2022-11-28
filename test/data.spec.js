//para las pruebas unitarias de las funciones implementadas en el archivo data.js.
import { example, anotherExample, suma } from '../src/data.js';


describe('example', () => {
  it('is a function', () => {
    expect(typeof example).toBe('function');
  });

  it('returns `example`', () => {
    expect(example()).toBe('example');
  });
});


describe('anotherExample', () => {
  it('is a function', () => {
    expect(typeof anotherExample).toBe('function');
  });

  it('returns `anotherExample`', () => {
    expect(anotherExample()).toBe('OMG');
  });
});


//ejemplo del test de suma planteado por nosotras
describe('suma', () => {
  it('sumar 1 + 2 es igual a 3', () => {
    expect(suma(1, 2)).toBe(3);
  });
})

//ejemplo del test de suma planteado por nosotras
describe('suma', () => {
  it('sumar 1 + 2 es igual a 3', () => {
    expect(suma(1, 2)).toBe(3);
  });
})

//TEST PRIMERAS DOS FUNCIONES

describe('buscarPorInput', () => {
  it('is a function', () => {
    expect(typeof buscarPorInput).toBe('function');
  });

  it('should return “pokemon-item.name=“pikachu”” with “pik”', () => {
    expect(buscarPorInput("pik")).toBe("pokemon-item.name=“pikachu”");
  });
});


describe('buscarPorTipo', () => {
  it('is a function', () => {
    expect(typeof buscarPorTipo).toBe('function');
  });

  it('should return "pokemon-item.type=“dragon”" with “dragon”', () => {
    expect(buscarPorTipo("dragon")).toBe("pokemon-item.type=“dragon”");
  });
});

import { sumar } from '../src/data.js';

describe('Pruebas para la funcion sumar', ()=> {
  it('Deberia retornar 2 si sus argumentos son 1 y 1', ()=> {
    const resultado = sumar(1, 1)

    expect(resultado).toBe(2)
  })

  it('No deberia retornar 2 si sus argumentos son 1 y 4', ()=> {
    const resultado = sumar(1, 4)

    expect(resultado).not.toBe(2)
  })

  // toContain, toEqual, toMatch, not
})


// describe('example', () => {
//   it('is a function', () => {
//     expect(typeof example).toBe('function');
//   });

//   it('returns `example`', () => {
//     expect(example()).toBe('example');
//   });
// });


// describe('anotherExample', () => {
//   it('is a function', () => {
//     expect(typeof anotherExample).toBe('function');
//   });

//   it('returns `anotherExample`', () => {
//     expect(anotherExample()).toBe('OMG');
//   });
// });

import { obtenerDatos, filtro, orderAZ, calcularPorcentaje } from '../src/data.js';

describe('obtenerDatos', () => {
  it('es una función', () => {
    expect(typeof obtenerDatos).toBe('function');
  });
//   it('obtiene los datos correctamente', async () => {
//   const resultado = await obtenerDatos();
//   expect(resultado).toEqual([
//         {id: 587, name: "Hermione Granger", gender: "Female", house: "Gryffindor"},
//         {id: 117,name: "Cedric Diggory",gender: "Male", house: "Hufflepuff"},
//         {id: 266,name: "Abraxas Malfoy", gender: "Male", house: "Slytherin"},
//         {id: 566,name: "Fawcett", gender: "Female", house: "Ravenclaw"},]);
// });
});
  
describe('filtro', () => {
  it('es una función', () => {
    expect(typeof filtro).toBe('function');
  });

  it('filtra los elementos del array según la casa especificada', () => {
    const arr = [
      { name: 'Hermione', house: 'Gryffindor' },
      { name: 'Abraxas', house: 'Slytherin' },
      { name: 'Cedric', house: 'Hufflepuff' },
      { name: 'Fawcett', house: 'Ravenclaw' },
    ];

    let result = filtro(arr, 'Gryffindor');
    expect(result).toEqual([{ name: 'Hermione', house: 'Gryffindor' }]);

    result = filtro(arr, 'Slytherin');
    expect(result).toEqual([{ name: 'Abraxas', house: 'Slytherin' }]);

    result = filtro(arr, 'Hufflepuff');
    expect(result).toEqual([{ name: 'Cedric', house: 'Hufflepuff' }]);

    result = filtro(arr, 'Ravenclaw');
    expect(result).toEqual([{name: 'Fawcett', house: 'Ravenclaw'}]);
  });
});


describe('orderAZ', () => {
  it('es una función', () => {
      expect(typeof orderAZ).toBe('function');
  });

  it('ordena el array de manera ascendente según el nombre de cada elemento', () => {
    const arr = [
      { name: "Cadwallader", gender: "Male", house: "Hufflepuff" },
      { name: "Euan Abercrombie", gender: "Male", house: "Gryffindor" },
      { name: "Hetty Bayliss", gender: "Female", house: "null" },
      { name: "Katie Bell", gender: "Female", house: "Gryffindor}" },
      { name: "Mandy Brocklehurst", gender: "Female", house: "Ravenclaw}" },
    ];

    let result = orderAZ(arr);
    expect(result).toEqual([
      { name: "Cadwallader", gender: "Male", house: "Hufflepuff" },
      { name: "Euan Abercrombie", gender: "Male", house: "Gryffindor" },
      { name: "Hetty Bayliss", gender: "Female", house: "null" },
      { name: "Katie Bell", gender: "Female", house: "Gryffindor}" },
      { name: "Mandy Brocklehurst", gender: "Female", house: "Ravenclaw}" }
    ]);
  });
});

describe('calcularPorcentaje', () => {
  it('es una función', () => {
    expect(typeof calcularPorcentaje).toBe('function');
  })});
  
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
//})})

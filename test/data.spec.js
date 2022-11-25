//import {name of the function} from "./data.js";

// test("should get the API info", () =>{
//     expect(getCharactersInfo).

// });

//crear mock para probar getAllCharacters sin la API
//hacer test código async con API
//matchers (isEqual, toBe (primit), lessThan)
// devolucion API payload

//test("should get the characters name and theirs image", () =>{});

//import {example} from '../src/data.js';

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

import sortingCharacters from '../src/main';

describe('sortingCharacter', () => {
    it(`Debería ordenar [{name: 'Harry'},{name: 'Barry'}] a - z`, () => {
        expect(sortingCharacters([{name: 'Harry'},{name: 'Barry'}])).toBe([{name: 'Barry'},{name: 'Harry'}]);
    });
});
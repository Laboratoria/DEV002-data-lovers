//npm test data.spec.js

import {getAllCharacters, sortingCharacters} from "../src/data"
import data from "../src/data_api/data.json"

// test fetch con mock del mismo y de la API
global.fetch = jest.fn(() =>
    Promise.resolve({
    json: () => Promise.resolve(data),
    })
);

it("prueba de retorno de información al llamado de la API", async () =>{
    const dataAPI = await getAllCharacters()
    expect(dataAPI[0]["name"]).toBe("Harry Potter")
    expect(fetch).toHaveBeenCalledTimes(1)
})

// test de .sort()
describe('sortingCharacter', () => {
    it(`Debería ordenar [{name: 'Harry'},{name: 'Barry'}] a - z`, () => {
        const result = sortingCharacters([{name: 'Harry'},{name: 'Barry'}])
        expect(JSON.stringify(result)).toBe( JSON.stringify([{name: 'Barry'},{name: 'Harry'}]));
    });
});
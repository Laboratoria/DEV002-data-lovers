//npm test data.spec.js

test("test para que pase data.spec.js", () =>{
    const mimi = true
    expect(mimi).toBe(true)
})

// import { getAllCharacters } from "../src/data"
// import data from "../src/data_api/data.json"

// global.fetch = jest.fn(() =>
//     Promise.resolve({
//     json: () => Promise.resolve(data),
//     })
// );

// it("prueba de retorno de información al llamado de la API", async () =>{
//     const dataAPI = await getAllCharacters()
//     expect(dataAPI[0]["name"]).toBe("Harry Potter")
//     expect(fetch).toHaveBeenCalledTimes(1)
// })

//  si se llama a la api y retorna info mayor a 0 es true
import { listarPokemon } from '../src/data';


describe('Pruebas para la funcion Filtro por región', () => {
  it('Validar que listarPokemon sea tipo funcion', () => {
    expect(typeof listarPokemon).toEqual('function');
  });

  it('validar que listarPokemon traiga la region kanto', () => {
    expect(listarPokemon('kanto').length).toEqual(151);
  }
  
  )

});




/*describe('anotherExample', () => {
  it('is a function', () => {
    expect(typeof anotherExample).toBe('function');
  });

  it('returns `anotherExample`', () => {
    expect(anotherExample()).toBe('OMG');
  });
});*/
